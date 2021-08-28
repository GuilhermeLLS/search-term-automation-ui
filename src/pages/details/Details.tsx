import * as React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import useStaleRefresh from "../../hooks/useStaleRefresh/useStaleRefresh";

export interface QueryResponse {
  id: string;
  urls: string[];
  status: "done" | "active";
}

export default function Details() {
  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();
  const { data, loading } = useStaleRefresh(
    `${process.env.REACT_APP_CRAWL_API_ENDPOINT_DEV as string}/${id}`
  );

  return (
    <div>
      <Link to="/request-search">{"Back <"}</Link>
      <h3>{data?.status}</h3>
      {!loading ? (
        <ul>
          {data?.urls.map((url: string) => (
            <li key={url}>{url}</li>
          ))}
        </ul>
      ) : (
        <span>loading....</span>
      )}
    </div>
  );
}
