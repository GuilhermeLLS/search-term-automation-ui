import * as React from "react";
import Header from "../../components/Header/Header";
import { PageHero } from "../../components/Commons/Commons";
import InspectForm from "../../components/InspectForm/InspectForm";
import InspectionList from "../../components/InspectionList/InspectionList";

export default function SearchRequest() {
  return (
    <React.Fragment>
      <Header />
      <PageHero>
        <InspectForm />
      </PageHero>
      <InspectionList />
    </React.Fragment>
  );
}
