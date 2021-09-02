import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  &:hover {
    text-decoration: underline;
  }
`;

export const Detailer = styled.div`
  width: 800px;
  margin: 15px 0 0 0;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: 468px) {
    width: auto;
  }
`;

export const DetailsHeader = styled.div`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: flex-start;

  .header-title {
    font-size: 16px;
    font-weight: 700;
  }

  .header-subtitle {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const DetailsItem = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.accent};
`;

export const ItemTitle = styled.span`
  width: 40%;
  text-align: start;
`;

export const ItemContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  text-align: start;
`;
