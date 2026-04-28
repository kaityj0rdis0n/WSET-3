import { useState } from 'react';
import type { StudyMode } from './types';
import { Nav } from './components/Nav/Nav';
import { FlashcardMode } from './components/Flashcard/Flashcard';
import { QuizMode } from './components/Quiz/Quiz';
import styles from './App.module.css';

export function App() {
  const [mode, setMode] = useState<StudyMode>('home');

  return (
    <div className={styles.layout}>
      <Nav currentMode={mode} onNavigate={setMode} />

      <main className={styles.main}>
        {mode === 'home' && <HomeScreen onNavigate={setMode} />}
        {mode === 'flashcards' && <FlashcardMode />}
        {mode === 'quiz' && <QuizMode />}
      </main>
    </div>
  );
}

interface HomeScreenProps {
  onNavigate: (mode: StudyMode) => void;
}

function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Bordeaux</h1>
        <p className={styles.heroSubtitle}>WSET Level 3</p>
      </div>

      <div className={styles.modeGrid}>
        <button className={styles.modeCard} onClick={() => onNavigate('flashcards')}>
          <span className={styles.modeIcon}>🃏</span>
          <h2 className={styles.modeTitle}>Flashcards</h2>
          <p className={styles.modeDescription}>
            Flip through key concepts — geography, grapes, appellations, classification, and more.
          </p>
        </button>

        <button className={styles.modeCard} onClick={() => onNavigate('quiz')}>
          <span className={styles.modeIcon}>📝</span>
          <h2 className={styles.modeTitle}>Quiz</h2>
          <p className={styles.modeDescription}>
            Test yourself with multiple-choice questions and get instant feedback and explanations.
          </p>
        </button>
      </div>

      <div className={styles.topics}>
        <p className={styles.topicsLabel}>Topics covered</p>
        <div className={styles.topicTags}>
          {['Geography', 'Appellations', 'Grapes', 'Soils', 'Classification', 'Styles & Quality'].map((t) => (
            <span key={t} className={styles.topicTag}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
