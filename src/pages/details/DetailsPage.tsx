import * as React from "react";
import { useQuery } from "react-query";
import { Link, useRouteMatch } from "react-router-dom";
import { useDetails } from "../../App";

interface QueryResponse {
  id: string;
  urls: string[];
  status: "done" | "active";
}

const apiFetch = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
};

export default function DetailsPage() {
  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();
  const data = useStaleRefresh(`http://testapp.axreng.com:4567/crawl/${id}`, {});
  console.log({ data });
  return (
    <div>
      <Link to="/request-search">{"Back <"}</Link>
      <h3>{data?.status}</h3>
      <ul>
        {data?.urls.map((url: string) => (
          <li key={url}>{url}</li>
        ))}
      </ul>
    </div>
  );
}

const CACHE: Record<string, Record<"done" | "active", QueryResponse>> = {};

function useStaleRefresh(url: string, defaultValue: QueryResponse) {
  const [data, setData] = React.useState(defaultValue);

  React.useEffect(() => {
    const cacheID = url;
    console.log(CACHE);
    if (CACHE[cacheID]?.done) {
      console.log("here1");
      setData(CACHE[cacheID]?.done);
    } else if (!CACHE[cacheID] || CACHE[cacheID].active) {
      setData(CACHE[cacheID].active);
      console.log("here2");
      apiFetch(url).then((newData: QueryResponse) => {
        CACHE[cacheID][newData.status] = newData;
        setData(newData);
      });
    }
  }, [url]);
  return data;
}
