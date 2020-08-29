import React, { useState } from "react";
import * as SC from "./style";
import { useHistory } from "react-router-dom";
import { RouterConstant } from "constants";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit() {
    const user = JSON.parse(localStorage.getItem("registerUser"));
    if (user) {
      if (user.userName === userName && user.password === password) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        return history.push(RouterConstant.PersonalTrainer);
      }
    }
    return alert("user name or password is wrong!!!");
  }
  return (
    <SC.Container>
      <SC.FormContainer>
        <SC.Label htmlFor="userName">User Name</SC.Label>
        <SC.Input
          type="userName"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <SC.Label htmlFor="password">Password</SC.Label>
        <SC.Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <SC.ButtonContainer>
          <SC.Button onClick={() => handleSubmit()}>Login</SC.Button>
          <SC.Button onClick={() => window.history.back()}>Cancel</SC.Button>
        </SC.ButtonContainer>
      </SC.FormContainer>
    </SC.Container>
  );
}

export default Login;
