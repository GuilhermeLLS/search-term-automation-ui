import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 7px;
  }

  .input-submit-wrapper {
    display: flex;
  }

  span[role="alert"] {
    color: white;
    margin-top: 10px;
    font-weight: 700;
    font-size: 12px;
  }
  text-align: left;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid white;
`;

export const SubmitInput = styled.input`
  color: black;
  border: none;
  margin-left: 10px;
  font-weight: 700;
  border-radius: 4px;
  padding: 10px 20px;
  align-self: flex-end;
  background-color: white;
`;
