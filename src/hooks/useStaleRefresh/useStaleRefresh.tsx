import * as React from "react";

type QueryResponse = {
  id: string;
  urls: string[];
  status: "done" | "active";
};

const CACHE: Record<string, Record<string, QueryResponse>> = {};

const apiFetch = async (url: string): Promise<QueryResponse> => {
  const res = await fetch(url);
  return await res.json();
};

type TState = {
  data?: QueryResponse;
  error?: Error;
  loading: boolean;
};

type TAction =
  | { type: "loading" }
  | { type: "fetched"; payload: QueryResponse }
  | { type: "error"; payload: Error };

const reducer = (state: TState, action: TAction) => {
  switch (action.type) {
    case "loading":
      return state;
    case "fetched":
      return { ...state, data: action.payload };
    case "error":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default function useStaleRefresh(url: string) {
  const [state, dispatch] = React.useReducer(reducer, {
    loading: false,
  });

  React.useEffect(() => {
    const cacheID = url;
    dispatch({ type: "loading" });
    try {
      if (CACHE[cacheID]) {
        if (CACHE[cacheID]?.done) {
          dispatch({ type: "fetched", payload: CACHE[cacheID].done });
        } else {
          dispatch({ type: "fetched", payload: CACHE[cacheID].active });
          apiFetch(url).then((newData: QueryResponse) => {
            CACHE[cacheID][newData.status] = newData;
            dispatch({ type: "fetched", payload: newData });
          });
        }
      } else {
        apiFetch(url).then((newData: QueryResponse) => {
          CACHE[cacheID] = { [newData.status]: newData };
          dispatch({ type: "fetched", payload: newData });
        });
      }
    } catch (error) {
      dispatch({ type: "error", payload: error as Error });
    }
  }, [url]);

  return state;
}
