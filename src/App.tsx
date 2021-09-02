import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Theme from "./styles/theme";
import Details from "./pages/details/Details";
import SearchRequest from "./pages/search-request/SearchRequest";
import { WordsContextProvider } from "./contexts/WordsContext/WordsContext";

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <WordsContextProvider>
          <Switch>
            <Route path="/request-search">
              <SearchRequest />
            </Route>
            <Route path="/details/:word/:id">
              <Details />
            </Route>
          </Switch>
          <Route exact path="/">
            <Redirect to="/request-search" />
          </Route>
        </WordsContextProvider>
      </Theme>
    </BrowserRouter>
  );
}
