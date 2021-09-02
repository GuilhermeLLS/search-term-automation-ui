import * as React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link, Detailer, ItemTitle, DetailsItem, ItemContent, DetailsHeader } from "./styles";
import Header from "../../components/Header/Header";
import useStaleRefresh from "../../hooks/useStaleRefresh/useStaleRefresh";
import { PageHero, SectionWrapper } from "../../components/Commons/Commons";

export type QueryResponse = {
  id: string;
  urls: string[];
  status: "done" | "active";
};

export default function Details() {
  const {
    params: { id, word },
  } = useRouteMatch<{ word: string; id: string }>();
  const { data, loading } = useStaleRefresh(
    `${process.env.REACT_APP_CRAWL_API_ENDPOINT as string}/${id}`
  );

  return (
    <React.Fragment>
      <Header />
      <PageHero>
        <h1>{word}</h1>
      </PageHero>
      <SectionWrapper>
        <Link to="/request-search">{"<- Voltar para página inicial"}</Link>
        <Detailer>
          <DetailsHeader>
            <span className="header-title">Detalhes da palavra</span>
            <small className="header-subtitle">id, status, urls, valor</small>
          </DetailsHeader>
          <DetailsItem>
            <ItemTitle>Id</ItemTitle>
            <ItemContent>{loading ? "carregando id..." : data?.id}</ItemContent>
          </DetailsItem>
          <DetailsItem>
            <ItemTitle>Status</ItemTitle>
            <ItemContent>{loading ? "carregando status..." : data?.status}</ItemContent>
          </DetailsItem>
          <DetailsItem>
            <ItemTitle>urls</ItemTitle>
            <ItemContent>
              {loading
                ? "carregando urls..."
                : data?.urls.map((url: string) => <span key={url}>{url}</span>)}
            </ItemContent>
          </DetailsItem>
        </Detailer>
      </SectionWrapper>
    </React.Fragment>
  );
}
