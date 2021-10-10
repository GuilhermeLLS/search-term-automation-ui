import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <Link className="header-link" to="/request-search">
        Início
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        className="header-link"
        href="https://github.com/GuilhermeLLS/search-term-automation-ui"
      >
        Code
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 30%);
  position: relative;

  .header-link {
    margin-left: 30px;
    color: black;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 468px) {
    width: auto;
    padding: 10px 0 10px 30px;
  }
`;
