import { useState } from 'react';
import { flashcards } from '../../data/bordeaux';
import type { FlashcardProgress, FlashcardStatus, Topic } from '../../types';
import { TOPIC_COLOR_VAR } from '../../utils/topicColors';
import styles from './Flashcard.module.css';

const TOPIC_LABELS: Record<Topic, string> = {
  geography: 'Geography',
  appellations: 'Appellations',
  grapes: 'Grapes',
  soils: 'Soils',
  classification: 'Classification',
  styles: 'Styles & Quality',
};

const ALL_TOPICS = Object.keys(TOPIC_LABELS) as Topic[];

export function FlashcardMode() {
  const [selectedTopics, setSelectedTopics] = useState<Topic[]>(ALL_TOPICS);
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [progress, setProgress] = useState<FlashcardProgress>({});
  const [deck, setDeck] = useState<typeof flashcards>([]);

  const filteredCards = flashcards.filter((card) =>
    selectedTopics.includes(card.topic)
  );

  function toggleTopic(topic: Topic) {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  }

  function startDeck() {
    // Shuffle the filtered cards
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setProgress({});
    setIsStarted(true);
  }

  function markCard(status: FlashcardStatus) {
    const cardId = deck[currentIndex].id;
    setProgress((prev) => ({ ...prev, [cardId]: status }));
    setIsFlipped(false);
    setCurrentIndex((prev) => prev + 1);
  }

  function restart() {
    setIsStarted(false);
    setCurrentIndex(0);
    setIsFlipped(false);
    setProgress({});
  }

  // --- Setup screen ---
  if (!isStarted) {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Flashcards</h2>
        <p className={styles.subtitle}>Choose topics to study</p>
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
        <p className={styles.cardCount}>{filteredCards.length} cards selected</p>
        <button
          className={styles.startButton}
          onClick={startDeck}
          disabled={filteredCards.length === 0}
        >
          Start
        </button>
      </div>
    );
  }

  // --- Results screen ---
  if (currentIndex >= deck.length) {
    const knownCount = Object.values(progress).filter((s) => s === 'known').length;
    const unknownCount = Object.values(progress).filter((s) => s === 'unknown').length;
    const percentage = Math.round((knownCount / deck.length) * 100);

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Session Complete</h2>
        <div className={styles.resultsCard}>
          <div className={styles.resultsStat}>
            <span className={styles.resultsPercent}>{percentage}%</span>
            <span className={styles.resultsLabel}>Known</span>
          </div>
          <div className={styles.resultsBreakdown}>
            <span className={styles.knownCount}>✓ {knownCount} known</span>
            <span className={styles.unknownCount}>✗ {unknownCount} still learning</span>
          </div>
        </div>
        <button className={styles.startButton} onClick={restart}>
          Study Again
        </button>
      </div>
    );
  }

  const currentCard = deck[currentIndex];

  // --- Study screen ---
  return (
    <div className={styles.container}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${(currentIndex / deck.length) * 100}%` }}
        />
      </div>
      <p className={styles.progressText}>
        {currentIndex + 1} / {deck.length}
      </p>

      <div
        className={`${styles.card} ${isFlipped ? styles.cardFlipped : ''}`}
        onClick={() => setIsFlipped((prev) => !prev)}
        role="button"
        aria-label={isFlipped ? 'Card answer — tap to see question' : 'Card question — tap to reveal answer'}
      >
        <div className={styles.cardInner}>
          <div className={styles.cardFront}>
            <span
              className={styles.cardTopicLabel}
              style={{ color: TOPIC_COLOR_VAR[currentCard.topic] }}
            >
              {TOPIC_LABELS[currentCard.topic]}
            </span>
            <p className={styles.cardText}>{currentCard.front}</p>
            <span className={styles.cardHint}>Tap to reveal</span>
          </div>
          <div className={styles.cardBack} style={{ borderColor: 'var(--color-answer-accent)' }}>
            <span
              className={styles.cardTopicLabel}
              style={{ color: TOPIC_COLOR_VAR[currentCard.topic] }}
            >
              {TOPIC_LABELS[currentCard.topic]}
            </span>
            <p className={styles.cardText}>{currentCard.back}</p>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className={styles.actions}>
          <button
            className={`${styles.actionButton} ${styles.unknownButton}`}
            onClick={() => markCard('unknown')}
          >
            Still Learning
          </button>
          <button
            className={`${styles.actionButton} ${styles.knownButton}`}
            onClick={() => markCard('known')}
          >
            Got It
          </button>
        </div>
      )}
    </div>
  );
}
