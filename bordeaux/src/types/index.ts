export type Topic =
  | 'geography'
  | 'appellations'
  | 'grapes'
  | 'soils'
  | 'classification'
  | 'styles';

/**
 * Bordeaux bank / style grouping used to colour-code the map.
 * Sauternes is grouped as 'sweet' rather than 'left': it sits on the Left Bank
 * geographically, but its sweet-white style is distinct enough to warrant its own colour.
 */
export type Bank = 'left' | 'right' | 'sweet' | 'entre-deux-mers';

export interface Flashcard {
  id: string;
  topic: Topic;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: string;
  topic: Topic;
  question: string;
  options: string[];
  /** Index into options[] of the correct answer */
  correctIndex: number;
  explanation: string;
}

export type StudyMode = 'home' | 'flashcards' | 'quiz' | 'map';

export type FlashcardStatus = 'unseen' | 'known' | 'unknown';

export interface FlashcardProgress {
  [cardId: string]: FlashcardStatus;
}

export interface QuizResult {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}
