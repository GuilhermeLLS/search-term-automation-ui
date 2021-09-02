import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <a href="https://axur.com" rel="noreferrer nofollow">
        <Logo />
      </a>
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

function Logo() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100px"
      height="20px"
      viewBox="0 0 124 20"
      xmlSpace="preserve"
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#222222"
          d="M96.1,11.1V0.5c0-0.3,0.2-0.5,0.5-0.5h3.2c0.3,0,0.5,0.2,0.5,0.5v10.5c0,5.3-3.9,8.8-10.1,8.8
		c-6.1,0-10-3.4-10-8.8V0.5c0-0.3,0.2-0.5,0.5-0.5H84c0.3,0,0.5,0.2,0.5,0.5v10.5c0,3,1.9,4.5,5.8,4.5C94,15.6,96.1,13.9,96.1,11.1z
		"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#222222"
          d="M72.3,0.2C72.4,0.1,72.5,0,72.7,0H77c0.1,0,0.2,0,0.3,0.1c0.2,0.2,0.2,0.5,0,0.7l-7.9,8.9l7.8,8.8
		c0.1,0.1,0.1,0.2,0.1,0.3c0,0.3-0.2,0.5-0.5,0.5h-4.3c-0.1,0-0.3-0.1-0.4-0.2L66.6,13l-5.6,6.3c-0.1,0.1-0.2,0.2-0.4,0.2h-4.3
		c-0.1,0-0.2,0-0.3-0.1c-0.2-0.2-0.2-0.5,0-0.7l7.8-8.8l-7.9-8.9c-0.1-0.1-0.1-0.2-0.1-0.3C55.8,0.2,56,0,56.3,0h4.3
		c0.1,0,0.3,0.1,0.4,0.2l5.7,6.4L72.3,0.2z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#222222"
          d="M54.8,18.6L44.9,0.3C44.8,0.1,44.7,0,44.5,0h-3.8c-0.2,0-0.4,0.1-0.4,0.3l-9.9,18.4c-0.1,0.2,0,0.6,0.2,0.7
		c0.1,0,0.2,0.1,0.2,0.1h3.7c0.2,0,0.4-0.1,0.4-0.3l2.3-4.2l10.8,0l2.3,4.2c0.1,0.2,0.3,0.3,0.4,0.3h3.7c0.3,0,0.5-0.2,0.5-0.5
		C54.9,18.8,54.8,18.7,54.8,18.6z M39.1,11.2l3.4-6.4l3.4,6.4L39.1,11.2z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#222222"
          d="M123.8,18.4l-5.4-6c4.3-1.3,4.7-4.7,4.7-5.9c0-3.9-3.3-6.5-8.4-6.5l-10,0c-0.3,0-0.5,0.2-0.5,0.5c0,0,0,0,0,0
		l0,18.2c0,0.3,0.2,0.5,0.5,0.5l3.2,0c0.3,0,0.5-0.2,0.5-0.5l0-5.9h4.9l5.6,6.2c0.1,0.1,0.2,0.2,0.4,0.2h4.1c0.3,0,0.5-0.2,0.5-0.5
		C124,18.6,123.9,18.5,123.8,18.4z M118.1,8.3c-0.5,0.4-1.6,0.9-3.5,0.9h-6.1l0-5.5h6.1c4.1,0,4.4,2.2,4.4,2.8
		C119,7.3,118.7,7.9,118.1,8.3z"
        />
        <path
          id="Page-1_4_"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FF5824"
          d="M30.4,0.2l-10,18.5c-0.1,0.2,0,0.5,0.2,0.6c0.1,0,0.1,0.1,0.2,0.1h3.9c0.2,0,0.3-0.1,0.4-0.2
		L35,0.6c0.1-0.2,0-0.5-0.2-0.6C34.8,0,34.7,0,34.7,0h-3.9C30.6,0,30.5,0.1,30.4,0.2z"
        />
        <path
          id="Page-1-Copy_3_"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FF5824"
          d="M20.2,0.2l-10,18.5c-0.1,0.2,0,0.5,0.2,0.6c0.1,0,0.1,0.1,0.2,0.1h3.9
		c0.2,0,0.3-0.1,0.4-0.2l10-18.5c0.1-0.2,0-0.5-0.2-0.6C24.6,0,24.6,0,24.5,0h-3.9C20.5,0,20.3,0.1,20.2,0.2z"
        />
        <path
          id="Page-1-Copy-2_3_"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#FF5824"
          d="M10.1,0.2l-10,18.5C0,19,0,19.2,0.3,19.3c0.1,0,0.1,0.1,0.2,0.1h3.9
		c0.2,0,0.3-0.1,0.4-0.2l10-18.5c0.1-0.2,0-0.5-0.2-0.6C14.4,0,14.4,0,14.3,0h-3.9C10.3,0,10.1,0.1,10.1,0.2z"
        />
      </g>
    </svg>
  );
}
