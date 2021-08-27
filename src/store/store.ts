import create from "zustand";

type Word = {
  id: string;
  value: string;
};

type WordValidationState = {
  words: Array<Word>;
  createWord: (word: Word) => void;
};

export const useValidationStore = create<WordValidationState>((set) => ({
  words: [],
  createWord: (word: Word) => {
    set((state) => {
      return { words: [...state.words, word] };
    });
  },
}));
