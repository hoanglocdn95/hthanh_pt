import React, { useState } from "react";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";
import styled from "styled-components";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    const user = JSON.parse(localStorage.getItem("registerUser"));
    if (user) {
      if (user.userName === userName && user.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return window.history.back();
      }
    }
    return alert("user name or password is wrong!!!");
  }
  return (
    <Container>
      <FormContainer>
        <Label htmlFor="userName">User Name</Label>
        <Input
          type="userName"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <ButtonContainer>
          <Button onClick={() => handleSubmit()}>Login</Button>
          <Button onClick={() => window.history.back()}>Cancel</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Login;

const ButtonContainer = styled.div`
  display: flex;
  margin: 16px 0 0;
  width: 100%;
  justify-content: space-around;
`;

const Button = styled.button`
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: papayawhip;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 4px solid white;
  padding: 8px 16px 16px;
  background: papayawhip;
`;

const Label = styled.label`
  font-size: 17px;
  font-weight: 700;
  margin: 12px 0 6px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 8px;
`;
