import type { Bank } from '../types';

/** Maps each Bordeaux bank/style grouping to its CSS variable, mirroring TOPIC_COLOR_VAR. */
export const BANK_COLOR_VAR: Record<Bank, string> = {
  left: 'var(--color-bank-left)',
  right: 'var(--color-bank-right)',
  sweet: 'var(--color-bank-sweet)',
  'entre-deux-mers': 'var(--color-bank-entre-deux-mers)',
};

/** Human-readable labels for the map legend. */
export const BANK_LABEL: Record<Bank, string> = {
  left: 'Left Bank',
  right: 'Right Bank',
  sweet: 'Sweet (Sauternes)',
  'entre-deux-mers': 'Entre-Deux-Mers',
};

/** Fixed display order for the legend (reds first, then sweet, then dry whites). */
export const BANKS: readonly Bank[] = ['left', 'right', 'sweet', 'entre-deux-mers'];
