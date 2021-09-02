import styled from "styled-components";

export const SectionWrapper = styled.section`
  text-align: left;
  padding: 20px 0px 20px 50px;
  @media (max-width: 468px) {
    padding: 20px 30px;
  }
`;

export const PageHero = styled.section`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
