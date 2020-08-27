import React, { useState } from "react";
import * as SC from "./style";

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
    <SC.Container>
      <SC.FormContainer>
        <SC.Label>Are you ... ?</SC.Label>
        <SC.RadioContainer>
          <div>
            <SC.RadioOption
              type="radio"
              name="role"
              value="pt"
              onClick={(e) => setRole(e.target.value)}
            />
            <SC.Label>Personal Trainer</SC.Label>
          </div>
          <div>
            <SC.RadioOption
              type="radio"
              name="role"
              value="user"
              onClick={(e) => setRole(e.target.value)}
            />
            <SC.Label>User</SC.Label>
          </div>
        </SC.RadioContainer>
        <SC.Label htmlFor="userName">User Name</SC.Label>
        <SC.Input
          type="userName"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
        />
        <SC.Label htmlFor="password">Password</SC.Label>
        <SC.Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <SC.Label htmlFor="confirmPassword">Confirm password</SC.Label>
        <SC.Input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          required
        />
        <SC.ButtonContainer>
          <SC.Button onClick={() => handleRegister()}>Register</SC.Button>
          <SC.Button onClick={() => reset()}>Reset</SC.Button>
          <SC.Button onClick={() => window.history.back()}>Cancel</SC.Button>
        </SC.ButtonContainer>
      </SC.FormContainer>
    </SC.Container>
  );
}

export default Register;
