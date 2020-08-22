import React, { useState } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";

function Register() {
  const [role, setRole] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reset = () => {
    setRole("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
  };

  const checkValidation = () => {
    if (role === "") return false;
    if (userName.length < 6) return false;
    if (password.length < 6) return false;
    if (confirmPassword !== password) return false;
    return true;
  };

  const handleRegister = () => {
    if (!checkValidation()) return alert("there are some field invalid!!!");
    const data = {
      role,
      userName,
      password,
    };
    localStorage.setItem("registerUser", JSON.stringify(data));
    alert("register succeed!!!");
    return window.history.back();
  };

  return (
    <Container>
      <FormContainer>
        <Label>Are you ?</Label>
        <RadioContainer>
          <div>
            <RadioOption
              type="radio"
              name="role"
              value="pt"
              onClick={(e) => setRole(e.target.value)}
            />
            <Label>Personal Trainer</Label>
          </div>
          <div>
            <RadioOption
              type="radio"
              name="role"
              value="user"
              onClick={(e) => setRole(e.target.value)}
            />
            <Label>User</Label>
          </div>
        </RadioContainer>
        <Label htmlFor="userName">User Name</Label>
        <Input
          type="userName"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
        <ButtonContainer>
          <Button onClick={() => handleRegister()}>Register</Button>
          <Button onClick={() => reset()}>Reset</Button>
          <Button onClick={() => window.history.back()}>Cancel</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Register;

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
  padding: 16px;
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

const RadioOption = styled.input`
  border: 1px solid white;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
