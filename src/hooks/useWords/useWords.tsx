import * as React from "react";
import { WordsContext } from "../../contexts/WordsContext/WordsContext";

export function useWords() {
  const { words, createWord } = React.useContext(WordsContext);
  if (!words || !createWord) {
    throw new Error("Error on useWords custom hook!");
  }
  return { words, createWord };
}
