import * as React from "react";

type Word = {
  id: string;
  value: string;
};

type WordValidationState = {
  words: Array<Word>;
  createWord: (word: Word) => void;
};

const WORDS_INITIAL_STATE: Word[] = [];

const WordsContext = React.createContext<WordValidationState>({
  words: WORDS_INITIAL_STATE,
  createWord: () => {},
});

export function WordsContextProvider({ children }: { children: React.ReactNode }) {
  const [words, setWords] = React.useState<Word[]>(WORDS_INITIAL_STATE);

  const createWord = (word: Word) => {
    if (words.find(({ value }) => value === word.value)) {
      throw new Error("this word is already in the list");
    } else {
      setWords((prevState) => (prevState ? [...prevState, word] : [word]));
    }
  };

  return <WordsContext.Provider value={{ words, createWord }}>{children}</WordsContext.Provider>;
}

export function useWords() {
  const { words, createWord } = React.useContext(WordsContext);
  if (!words || !createWord) {
    throw new Error("Error on useWords custom hook!");
  }
  return { words, createWord };
}
