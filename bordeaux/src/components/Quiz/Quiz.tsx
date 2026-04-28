import { useState } from 'react';
import { quizQuestions } from '../../data/bordeaux';
import type { QuizResult, Topic } from '../../types';
import { TOPIC_COLOR_VAR } from '../../utils/topicColors';
import styles from './Quiz.module.css';

const TOPIC_LABELS: Record<Topic, string> = {
  geography: 'Geography',
  appellations: 'Appellations',
  grapes: 'Grapes',
  soils: 'Soils',
  classification: 'Classification',
  styles: 'Styles & Quality',
};

const ALL_TOPICS = Object.keys(TOPIC_LABELS) as Topic[];

type QuizPhase = 'setup' | 'question' | 'answered' | 'results';

export function QuizMode() {
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>(ALL_TOPICS);
  const [phase, setPhase] = useState<QuizPhase>('setup');
  const [deck, setDeck] = useState<typeof quizQuestions>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [results, setResults] = useState<QuizResult[]>([]);

  const filteredQuestions = quizQuestions.filter((q) =>
    selectedTopics.includes(q.topic)
  );

  function toggleTopic(topic: Topic) {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  }

  function startQuiz() {
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setSelectedOptionIndex(null);
    setResults([]);
    setPhase('question');
  }

  function selectOption(optionIndex: number) {
    if (phase !== 'question') return;
    const currentQuestion = deck[currentIndex];
    setSelectedOptionIndex(optionIndex);
    setResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedIndex: optionIndex,
        isCorrect: optionIndex === currentQuestion.correctIndex,
      },
    ]);
    setPhase('answered');
  }

  function nextQuestion() {
    if (currentIndex + 1 >= deck.length) {
      setPhase('results');
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setPhase('question');
    }
  }

  function restart() {
    setPhase('setup');
    setSelectedOptionIndex(null);
    setResults([]);
  }

  // --- Setup ---
  if (phase === 'setup') {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Quiz</h2>
        <p className={styles.subtitle}>Choose topics to test</p>
        <div className={styles.topicGrid}>
          {ALL_TOPICS.map((topic) => (
            <button
              key={topic}
              className={`${styles.topicChip} ${selectedTopics.includes(topic) ? styles.topicChipSelected : ''}`}
              style={selectedTopics.includes(topic) ? {
                borderColor: TOPIC_COLOR_VAR[topic],
                color: TOPIC_COLOR_VAR[topic],
              } : undefined}
              onClick={() => toggleTopic(topic)}
            >
              {TOPIC_LABELS[topic]}
            </button>
          ))}
        </div>
        <p className={styles.cardCount}>{filteredQuestions.length} questions</p>
        <button
          className={styles.primaryButton}
          onClick={startQuiz}
          disabled={filteredQuestions.length === 0}
        >
          Start Quiz
        </button>
      </div>
    );
  }

  // --- Results ---
  if (phase === 'results') {
    const correctCount = results.filter((r) => r.isCorrect).length;
    const percentage = Math.round((correctCount / deck.length) * 100);

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Quiz Complete</h2>
        <div className={styles.resultsCard}>
          <div className={styles.resultsStat}>
            <span className={styles.resultsPercent}>{percentage}%</span>
            <span className={styles.resultsLabel}>{correctCount} / {deck.length} correct</span>
          </div>
        </div>

        <div className={styles.reviewList}>
          {deck.map((question, index) => {
            const result = results[index];
            return (
              <div
                key={question.id}
                className={`${styles.reviewItem} ${result.isCorrect ? styles.reviewCorrect : styles.reviewIncorrect}`}
              >
                <p className={styles.reviewQuestion}>{question.question}</p>
                {!result.isCorrect && (
                  <>
                    <p className={styles.reviewWrong}>
                      Your answer: {question.options[result.selectedIndex]}
                    </p>
                    <p className={styles.reviewAnswer}>
                      Correct: {question.options[question.correctIndex]}
                    </p>
                  </>
                )}
                <p className={styles.reviewExplanation}>{question.explanation}</p>
              </div>
            );
          })}
        </div>

        <button className={styles.primaryButton} onClick={restart}>
          Try Again
        </button>
      </div>
    );
  }

  // --- Question / Answered ---
  const currentQuestion = deck[currentIndex];

  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${(currentIndex / deck.length) * 100}%` }}
        />
      </div>
      <p className={styles.progressText}>{currentIndex + 1} / {deck.length}</p>

      <div className={styles.questionCard}>
        <span
          className={styles.topicLabel}
          style={{ color: TOPIC_COLOR_VAR[currentQuestion.topic] }}
        >
          {TOPIC_LABELS[currentQuestion.topic]}
        </span>
        <p className={styles.questionText}>{currentQuestion.question}</p>
      </div>

      <div className={styles.optionsList}>
        {currentQuestion.options.map((option, index) => {
          let optionState: 'default' | 'correct' | 'incorrect' | 'missed' = 'default';
          if (phase === 'answered') {
            if (index === currentQuestion.correctIndex) optionState = 'correct';
            else if (index === selectedOptionIndex) optionState = 'incorrect';
          }

          return (
            <button
              key={index}
              className={`${styles.optionButton} ${styles[`option_${optionState}`]}`}
              onClick={() => selectOption(index)}
              disabled={phase === 'answered'}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className={styles.optionText}>{option}</span>
            </button>
          );
        })}
      </div>

      {phase === 'answered' && (
        <div className={styles.explanationBox}>
          <p className={styles.explanationText}>{currentQuestion.explanation}</p>
          <button className={styles.nextButton} onClick={nextQuestion}>
            {currentIndex + 1 >= deck.length ? 'See Results' : 'Next →'}
          </button>
        </div>
      )}
    </div>
  );
}
