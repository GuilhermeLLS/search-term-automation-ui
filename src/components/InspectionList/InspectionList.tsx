import * as React from "react";
import { Link } from "react-router-dom";
import { useValidationStore } from "../../store/store";

export default function InspectionList() {
  const words = useValidationStore((state) => state.words);
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
