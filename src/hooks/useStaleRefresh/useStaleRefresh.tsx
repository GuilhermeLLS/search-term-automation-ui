import * as React from "react";
import type { QueryResponse } from "../../pages/details/Details";

const CACHE: Record<string, Record<string, QueryResponse>> = {};

export default function useStaleRefresh(url: string) {
  const [data, setData] = React.useState<QueryResponse>();

  React.useEffect(() => {
    const cacheID = url;
    console.log(CACHE);
    if (CACHE[cacheID]) {
      if (CACHE[cacheID]?.done) {
        console.log("cache is done! no need to refetch");
        setData(CACHE[cacheID].done);
      } else {
        setData(CACHE[cacheID].active);
        console.log("refetch here!");
        apiFetch(url).then((newData: QueryResponse) => {
          CACHE[cacheID][newData.status] = newData;
          setData(newData);
        });
      }
    } else {
      console.log("first fetch here!");
      apiFetch(url).then((newData: QueryResponse) => {
        CACHE[cacheID] = { [newData.status]: newData };
        setData(newData);
      });
    }
  }, [url]);
  return data;
}
