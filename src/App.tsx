import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Details from "./pages/details/Details";
import SearchRequest from "./pages/search-request/SearchRequest";
import { WordsContextProvider } from "./contexts/WordsContext/WordsContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <WordsContextProvider>
          <Switch>
            <Route path="/request-search">
              <SearchRequest />
            </Route>
            <Route path="/details/:id">
              <Details />
            </Route>
          </Switch>
        </WordsContextProvider>
        <Route exact path="/">
          <Redirect to="/request-search" />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
