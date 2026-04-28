import type { StudyMode } from '../../types';
import styles from './Nav.module.css';

interface NavProps {
  currentMode: StudyMode;
  onNavigate: (mode: StudyMode) => void;
}

export function Nav({ currentMode, onNavigate }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.brandIcon}>🍷</span>
        <span className={styles.brandText}>Bordeaux Study</span>
      </div>
      {currentMode !== 'home' && (
        <button className={styles.backButton} onClick={() => onNavigate('home')}>
          ← Home
        </button>
      )}
    </nav>
  );
}
