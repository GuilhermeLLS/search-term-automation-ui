import * as React from "react";
import { useValidationStore } from "../../store/teste";

export default function InspectionList() {
  const words = useValidationStore((state) => state.words);
  return (
    <ul>
      {Object.entries(words).map(([word, isValid]) => (
        <li key={word} style={{ color: !isValid ? "firebrick" : "green" }}>
          {word}
        </li>
      ))}
    </ul>
  );
}
