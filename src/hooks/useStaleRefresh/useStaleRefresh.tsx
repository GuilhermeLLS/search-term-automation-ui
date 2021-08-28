import * as React from "react";
import type { QueryResponse } from "../../pages/details/Details";

const CACHE: Record<string, Record<string, QueryResponse>> = {};

const apiFetch = async (url: string): Promise<QueryResponse> => {
  const res = await fetch(url);
  return await res.json();
};

export default function useStaleRefresh(url: string) {
  const [data, setData] = React.useState<QueryResponse>();
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const cacheID = url;
    console.log(CACHE);
    if (CACHE[cacheID]) {
      if (CACHE[cacheID]?.done) {
        console.log("cache is done! no need to refetch");
        setData(() => CACHE[cacheID].done);
        setLoading(() => false);
      } else {
        setData(() => CACHE[cacheID].active);
        setLoading(() => false);
        console.log("refetch here!");
        apiFetch(url).then((newData: QueryResponse) => {
          CACHE[cacheID][newData.status] = newData;
          setData(() => newData);
        });
      }
    } else {
      console.log("first fetch here!");
      setLoading(() => true);
      apiFetch(url).then((newData: QueryResponse) => {
        CACHE[cacheID] = { [newData.status]: newData };
        setData(() => newData);
        setLoading(() => false);
      });
    }
  }, [url]);
  return { data, loading };
}
