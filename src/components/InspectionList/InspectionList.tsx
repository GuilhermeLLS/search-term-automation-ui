import * as React from "react";
import { SectionWrapper } from "../Commons/Commons";
import { useWords } from "../../hooks/useWords/useWords";
import { List, InfoWrapper, Pill, Link } from "./styles";

export default function InspectionList() {
  const { words } = useWords();

  return (
    <SectionWrapper>
      <h3>Sua lista de palavras</h3>
      <List>
        {words.map(({ value, id }) => (
          <li className="list-item" key={id}>
            <InfoWrapper>
              <span className="word-info">{value}</span>
              <span className="id-info">id: {id}</span>
            </InfoWrapper>
            <Pill>
              <Link to={`/details/${value}/${id}`}>Ver</Link>
            </Pill>
          </li>
        ))}
      </List>
    </SectionWrapper>
  );
}
