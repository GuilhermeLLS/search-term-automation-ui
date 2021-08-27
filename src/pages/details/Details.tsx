import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export interface QueryResponse {
  id: string;
  urls: string[];
  status: "done" | "active";
}

const apiFetch = async (url: string): Promise<QueryResponse> => {
  const res = await fetch(url);
  return await res.json();
};

export default function Details() {
  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();
  const data = useStaleRefresh(`http://testapp.axreng.com:4567/crawl/${id}`);

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
