import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const List = styled.ul`
  padding: 0;

  .list-item {
    width: 200px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accent};

    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .id-info {
    font-size: 12px;
  }

  .word-info {
    font-size: 16px;
  }
`;

export const Pill = styled.span`
  font-size: 12px;
  cursor: pointer;
  padding: 3px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  &:hover {
    box-shadow: 3px 5px 5px 0px ${({ theme }) => theme.colors.accent};
  }
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
`;
