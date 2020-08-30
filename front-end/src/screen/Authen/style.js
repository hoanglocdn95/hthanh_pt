import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  margin: 16px 0 0;
  width: 100%;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: fit-content;
  border-radius: 6px;
  border: 2px solid white;
  padding: 8px;
  background: papayawhip;
  font-size: 17px;
  font-weight: 700;
  color: lightgray;
  &:hover {
    color: gray;
    border-color: gray;
    cursor: pointer;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: papayawhip;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 4px solid white;
  padding: 16px;
  background: papayawhip;
  &:hover {
    border-color: gray;
  }
`;

export const Label = styled.label`
  font-size: 17px;
  font-weight: 700;
  margin: 12px 0 6px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid white;
  padding: 8px;
`;

export const RadioOption = styled.input`
  border: 1px solid white;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
