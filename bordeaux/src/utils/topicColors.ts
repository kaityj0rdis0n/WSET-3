import type { Topic } from '../types';

/** Maps each topic to its CSS variable for consistent colour-coding across the app. */
export const TOPIC_COLOR_VAR: Record<Topic, string> = {
  geography: 'var(--color-topic-geography)',
  appellations: 'var(--color-topic-appellations)',
  grapes: 'var(--color-topic-grapes)',
  soils: 'var(--color-topic-soils)',
  classification: 'var(--color-topic-classification)',
  styles: 'var(--color-topic-styles)',
};
