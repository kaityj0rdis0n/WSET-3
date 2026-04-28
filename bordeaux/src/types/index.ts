export type Topic =
  | 'geography'
  | 'appellations'
  | 'grapes'
  | 'soils'
  | 'classification'
  | 'styles';

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

export type StudyMode = 'home' | 'flashcards' | 'quiz';

export type FlashcardStatus = 'unseen' | 'known' | 'unknown';

export interface FlashcardProgress {
  [cardId: string]: FlashcardStatus;
}

export interface QuizResult {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
}
