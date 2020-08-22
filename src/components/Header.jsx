import React, { useState, useEffect } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (currentUser) setIsLogged(true);
    else setIsLogged(false);
  }, []);
  const handleDirect = (route) => {
    console.log("handleDirect -> window", window);
    // return window.history.go(route);
    return <Redirect to={route} />;
  };
  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsLogged(false);
  };
  return (
    <Container>
      <Logo>Personal Trainer</Logo>
      <Right>
        {isLogged ? (
          <React.Fragment>
            <Name>Hello {currentUser.userName} !!!</Name>
            <ItemRight onClick={() => logout()}>Logout</ItemRight>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <LinkRoute to="/register">Register</LinkRoute>
            <LinkRoute to="/login">Login</LinkRoute>
          </React.Fragment>
        )}
      </Right>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: papayawhip;
  display: flex;
  justify-content: space-between;
  padding: 16px 40px;
  height: fit-content;
  align-items: center;
`;
const Logo = styled.p`
  color: orange;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
  padding: 8px;
  font-size: 30px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;
const ItemRight = styled.button`
  background: papayawhip;
  border: 5px solid white;
  text-decoration: none;
  height: fit-content;
  color: lightgray;
  font-weight: 700;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 999px;
  &:hover {
    color: gray;
    border-color: gray;
  }
`;

const LinkRoute = styled(Link)`
  background: papayawhip;
  border: 5px solid white;
  text-decoration: none;
  height: fit-content;
  margin-right: 16px;
  color: lightgray;
  font-weight: 700;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 999px;
  &:hover {
    color: gray;
    border-color: gray;
  }
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: blue;
  margin-right: 16px;
`;
