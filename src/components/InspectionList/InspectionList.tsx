import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { useWords } from "../../hooks/useWords/useWords";

export default function InspectionList() {
  const { words } = useWords();

  return (
    <SectionWrapper>
      <h3>Sua lista de palavras</h3>
      <List>
        {words.map(({ value, id }) => (
          <ListItem key={id}>
            <InfoWrapper>
              <WordInfo>{value}</WordInfo>
              <IdInfo>id: {id}</IdInfo>
            </InfoWrapper>
            <Pill>
              <Link to={`/details/${id}`}>Ver</Link>
            </Pill>
          </ListItem>
        ))}
      </List>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  text-align: left;
  padding: 20px 0px 20px 50px;
`;

const List = styled.ul`
  padding: 0;
`;

const ListItem = styled.li`
  width: 200px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d0d0d0;

  &:first-child {
    border-top: 1px solid #d0d0d0;
  }
`;

const IdInfo = styled.span`
  font-size: 12px;
`;

const WordInfo = styled.span`
  font-size: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

function ChevronRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="tomato"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
}

const Pill = styled.span`
  font-size: 12px;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 10px;
  border: 1px solid #d0d0d0;

  &:hover {
    box-shadow: 3px 5px 5px 0px orange;
  }
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: #000011;
`;
