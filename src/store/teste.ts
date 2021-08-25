import create from "zustand";

interface WordValidationState {
  words: Record<string, boolean>;
  validateWord: (word: string) => void;
  createWord: (word: string) => void;
}

export const useValidationStore = create<WordValidationState>((set) => ({
  words: { guilherme: false },
  validateWord: (word: string) => {
    set((state) => {
      state.words[word] = true;
      return { words: { ...state.words } };
    });
  },
  createWord: (word: string) =>
    set((state) => {
      return { words: { ...state.words, [word]: false } };
    }),
}));
