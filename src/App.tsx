import * as React from "react";
import "./App.css";
import InspectForm from "./components/InspectForm/InspectForm";
import InspectionList from "./components/InspectionList/InspectionList";

function App() {
  return (
    <div className="App">
      <InspectForm />
      <InspectionList />
    </div>
  );
}

export default App;
