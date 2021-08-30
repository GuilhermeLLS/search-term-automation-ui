import * as React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
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

const PageHero = styled.section`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #ff5824;
`;
