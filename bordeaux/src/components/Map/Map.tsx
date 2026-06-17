import { useState } from 'react';
import { regions, regionQuizQuestions } from '../../data/regions';
import type { RegionFact, RegionQuizQuestion } from '../../data/regions';
import { BordeauxMap } from './BordeauxMap';
import { BANK_COLOR_VAR, BANK_LABEL, BANKS } from '../../utils/bankColors';
import styles from './Map.module.css';

type MapPhase = 'explore' | 'quiz' | 'quizAnswer' | 'quizRetry' | 'quizIncorrect' | 'quizResults';

export function MapMode() {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [phase, setPhase] = useState<MapPhase>('explore');
  const [quizDeck, setQuizDeck] = useState<RegionQuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const selectedRegion: RegionFact | undefined = regions.find(
    (r) => r.id === selectedRegionId
  );

  function handleRegionClick(regionId: string) {
    setSelectedRegionId(regionId);
    setPhase('explore');
  }

  function startRegionQuiz() {
    if (!selectedRegionId) return;
    const questions = regionQuizQuestions.filter(
      (q) => q.regionId === selectedRegionId
    );
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setQuizDeck(shuffled);
    setQuizIndex(0);
    setSelectedOptionIndex(null);
    setAttemptCount(0);
    setCorrectCount(0);
    setPhase('quiz');
  }

  function selectOption(optionIndex: number) {
    if (phase !== 'quiz' && phase !== 'quizRetry') return;
    setSelectedOptionIndex(optionIndex);
    const isCorrect = optionIndex === quizDeck[quizIndex].correctIndex;

    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setPhase('quizAnswer');
    } else if (attemptCount === 0) {
      setAttemptCount(1);
      setPhase('quizAnswer');
    } else {
      setPhase('quizIncorrect');
    }
  }

  function handleRetry() {
    setSelectedOptionIndex(null);
    setPhase('quizRetry');
  }

  function nextQuestion() {
    if (quizIndex + 1 >= quizDeck.length) {
      setPhase('quizResults');
    } else {
      setQuizIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setAttemptCount(0);
      setPhase('quiz');
    }
  }

  function backToExplore() {
    setPhase('explore');
  }

  // --- Quiz Results ---
  if (phase === 'quizResults') {
    const percentage = Math.round((correctCount / quizDeck.length) * 100);
    return (
      <div className={styles.container}>
        <button className={styles.backLink} onClick={backToExplore}>
          ← Back to {selectedRegion?.name}
        </button>
        <div className={styles.resultsCard}>
          <h3 className={styles.resultsTitle}>{selectedRegion?.name} — Quiz Complete</h3>
          <div className={styles.resultsStat}>
            <span className={styles.resultsPercent}>{percentage}%</span>
            <span className={styles.resultsLabel}>{correctCount} / {quizDeck.length} correct</span>
          </div>
        </div>
        <button className={styles.primaryButton} onClick={startRegionQuiz}>
          Try Again
        </button>
        <button className={styles.secondaryButton} onClick={backToExplore}>
          Back to Explore
        </button>
      </div>
    );
  }

  // --- Quiz Question ---
  if ((phase === 'quiz' || phase === 'quizRetry' || phase === 'quizAnswer' || phase === 'quizIncorrect') && quizDeck.length > 0) {
    const currentQuestion = quizDeck[quizIndex];
    const isAnswered = phase === 'quizAnswer' || phase === 'quizIncorrect';
    const isCorrect = selectedOptionIndex === currentQuestion.correctIndex;

    return (
      <div className={styles.container}>
        <button className={styles.backLink} onClick={backToExplore}>
          ← Back to {selectedRegion?.name}
        </button>
        <p className={styles.quizProgress}>{quizIndex + 1} / {quizDeck.length}</p>
        <div className={styles.questionCard}>
          <p className={styles.questionText}>{currentQuestion.question}</p>
        </div>
        <div className={styles.optionsList}>
          {currentQuestion.options.map((option, index) => {
            let optionState: 'default' | 'correct' | 'incorrect' = 'default';
            if (isAnswered) {
              if (index === currentQuestion.correctIndex) optionState = 'correct';
              else if (index === selectedOptionIndex) optionState = 'incorrect';
            }
            return (
              <button
                key={index}
                className={`${styles.optionButton} ${styles[`option_${optionState}`]}`}
                onClick={() => selectOption(index)}
                disabled={isAnswered}
              >
                <span className={styles.optionLetter}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className={styles.optionText}>{option}</span>
              </button>
            );
          })}
        </div>
        {phase === 'quizAnswer' && isCorrect && (
          <div className={styles.explanationBox}>
            <p className={styles.verdictCorrect}>Correct</p>
            <p className={styles.explanationText}>{currentQuestion.explanation}</p>
            <button className={styles.nextButton} onClick={nextQuestion}>
              {quizIndex + 1 >= quizDeck.length ? 'See Results' : 'Next →'}
            </button>
          </div>
        )}
        {phase === 'quizAnswer' && !isCorrect && (
          <div className={styles.explanationBox}>
            <p className={styles.verdictIncorrect}>Try Again</p>
            <button className={styles.nextButton} onClick={handleRetry}>
              Retry →
            </button>
          </div>
        )}
        {phase === 'quizIncorrect' && (
          <div className={styles.explanationBox}>
            <p className={styles.verdictIncorrect}>Incorrect</p>
            <p className={styles.explanationText}>{currentQuestion.explanation}</p>
            <button className={styles.nextButton} onClick={nextQuestion}>
              {quizIndex + 1 >= quizDeck.length ? 'See Results' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    );
  }

  // --- Explore ---
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bordeaux Map</h2>
      <p className={styles.subtitle}>Tap a region to explore</p>

      <div className={styles.mapContainer}>
        <BordeauxMap
          selectedRegionId={selectedRegionId}
          onRegionClick={handleRegionClick}
        />
      </div>

      <ul className={styles.legend}>
        {BANKS.map((bank) => (
          <li key={bank} className={styles.legendItem}>
            <span
              className={styles.legendSwatch}
              style={{ background: BANK_COLOR_VAR[bank] }}
            />
            {BANK_LABEL[bank]}
          </li>
        ))}
      </ul>

      {selectedRegion && (
        <div className={styles.factPanel}>
          <h3 className={styles.factTitle}>{selectedRegion.name}</h3>
          <dl className={styles.factList}>
            <div className={styles.factRow}>
              <dt className={styles.factLabel}>Bank</dt>
              <dd className={styles.factValue}>{selectedRegion.bank}</dd>
            </div>
            <div className={styles.factRow}>
              <dt className={styles.factLabel}>Key Grapes</dt>
              <dd className={styles.factValue}>{selectedRegion.keyGrapes}</dd>
            </div>
            <div className={styles.factRow}>
              <dt className={styles.factLabel}>Soils</dt>
              <dd className={styles.factValue}>{selectedRegion.soils}</dd>
            </div>
            <div className={styles.factRow}>
              <dt className={styles.factLabel}>Style</dt>
              <dd className={styles.factValue}>{selectedRegion.style}</dd>
            </div>
            <div className={styles.factRow}>
              <dt className={styles.factLabel}>Classification</dt>
              <dd className={styles.factValue}>{selectedRegion.classification}</dd>
            </div>
            <div className={styles.factRow}>
              <dt className={styles.factLabel}>Notable Châteaux</dt>
              <dd className={styles.factValue}>{selectedRegion.notableChateaux}</dd>
            </div>
          </dl>
          <button className={styles.primaryButton} onClick={startRegionQuiz}>
            Test Me on {selectedRegion.name}
          </button>
        </div>
      )}
    </div>
  );
}
