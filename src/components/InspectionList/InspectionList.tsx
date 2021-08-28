import * as React from "react";
import { Link } from "react-router-dom";
import { useWords } from "../../hooks/useWords/useWords";

export default function InspectionList() {
  const { words } = useWords();

  return (
    <ul>
      {words.map(({ value, id }) => (
        <li key={id}>
          <Link to={`/details/${id}`}>{value}</Link>
        </li>
      ))}
    </ul>
  );
}
