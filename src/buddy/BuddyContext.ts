import { createContext } from 'react';

export interface BuddyValue {
  /** Abre o balão do mini Lucas com o texto do termo informado. */
  ask: (termId: string) => void;
}

export const BuddyContext = createContext<BuddyValue | null>(null);
