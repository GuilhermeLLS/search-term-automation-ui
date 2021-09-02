import * as React from "react";

export type Word = {
  id: string;
  value: string;
};

type WordValidationState = {
  words: Array<Word>;
  createWord: (word: Word) => void;
};

const WORDS_INITIAL_STATE: Word[] = [];

export const WordsContext = React.createContext<WordValidationState>({
  words: WORDS_INITIAL_STATE,
  createWord: () => {},
});

export function WordsContextProvider({
  children,
  initialState = WORDS_INITIAL_STATE,
}: {
  children: React.ReactNode;
  initialState?: Word[];
}) {
  const [words, setWords] = React.useState<Word[]>(initialState);

  const createWord = (word: Word) => {
    if (words.find(({ value }) => value === word.value)) {
      throw new Error("this word is already in the list");
    } else {
      setWords((prevState) => (prevState ? [...prevState, word] : [word]));
    }
  };

  return <WordsContext.Provider value={{ words, createWord }}>{children}</WordsContext.Provider>;
}
