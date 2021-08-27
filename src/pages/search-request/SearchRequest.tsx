import * as React from "react";
import InspectForm from "../../components/InspectForm/InspectForm";
import InspectionList from "../../components/InspectionList/InspectionList";
import { WordsContextProvider } from "../../contexts/WordsContext/WordsContext";

export default function SearchRequest() {
  return (
    <WordsContextProvider>
      <InspectForm />
      <InspectionList />
    </WordsContextProvider>
  );
}
