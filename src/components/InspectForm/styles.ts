import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 10px;
`;

export const Label = styled.label`
  margin-bottom: 7px;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid white;
`;

export const SubmitInput = styled.input`
  color: black;
  border: none;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 20px;
  align-self: flex-end;
  background-color: white;
`;
