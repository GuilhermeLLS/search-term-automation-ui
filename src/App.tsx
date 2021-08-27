import * as React from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import InspectForm from "./components/InspectForm/InspectForm";
import InspectionList from "./components/InspectionList/InspectionList";
import { QueryClientProvider, QueryClient, useMutation, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import DetailsPage from "./pages/details/DetailsPage";
import { Updater } from "react-query/types/core/utils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 20 seconds
      staleTime: Infinity,
    },
  },
});

const wordKeys = {
  all: ["words"] as const,
  details: () => [...wordKeys.all, "detail"] as const,
  detail: (id: number) => [...wordKeys.details(), id] as const,
};
const requestValidationId = async (word: string): Promise<{ id: string; word: string }> => {
  const res = await fetch("http://testapp.axreng.com:4567/crawl", {
    method: "POST",
    body: JSON.stringify({ keyword: word }),
  });
  const a = await res.json();
  return { ...a, word };
};

export const useCreateWordRQ = () => {
  return useMutation(requestValidationId, {
    onSuccess: (data) => {
      queryClient.setQueryData(["words", data.id], (previous: any) => {
        console.log(previous);
        return previous
          ? [
              ...previous,
              {
                value: data.word,
                id: data.id,
                urls: [],
                status: "active",
              },
            ]
          : [
              {
                value: data.word,
                id: data.id,
                urls: [],
                status: "active",
              },
            ];
      });
    },
  });
};

export function useWords() {
  return queryClient.getQueryData(wordKeys.all);
}

export type Word = {
  id: string;
  value: string;
  urls: string[];
  status: "done" | "active";
};
type QueryResponse = Omit<Word, "value">;

export function useDetails(id: string) {
  return useMutation<QueryResponse>(
    async () => {
      const res = await fetch(`http://testapp.axreng.com:4567/crawl/${id}`);
      return await res.json();
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(["words", "detail", data.id], (previous: any): Word[] => {
          console.log({ previous });
          return previous?.map((item: Word) =>
            item.id === data.id ? { ...data, [item.value]: item.value } : item
          );
        });
      },
    }
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route path="/details/:id">
              <DetailsPage />
            </Route>
            <Route path="/request-search">
              <InspectForm />
              <InspectionList />
            </Route>
          </Switch>
          <Route exact path="/">
            <Redirect to="/request-search" />
          </Route>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
