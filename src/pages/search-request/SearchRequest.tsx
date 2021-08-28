import * as React from "react";
import InspectForm from "../../components/InspectForm/InspectForm";
import InspectionList from "../../components/InspectionList/InspectionList";

export default function SearchRequest() {
  return (
    <React.Fragment>
      <InspectForm />
      <InspectionList />
    </React.Fragment>
  );
}
