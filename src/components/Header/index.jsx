import React, { useState, useEffect } from "react";
import * as SC from "./style";
import { RouterConstant } from "constants";

function Header() {
  const [isLogged, setIsLogged] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (currentUser) setIsLogged(true);
    else setIsLogged(false);
  }, []);
  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsLogged(false);
  };
  return (
    <SC.Container>
      <SC.Logo>Personal Trainer</SC.Logo>
      <SC.Right>
        {isLogged ? (
          <React.Fragment>
            <SC.Name>Hello {currentUser.userName} !!!</SC.Name>
            <SC.ItemRight onClick={() => logout()}>Logout</SC.ItemRight>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <SC.LinkRoute to={RouterConstant.Register}>Register</SC.LinkRoute>
            <SC.LinkRoute to={RouterConstant.Login}>Login</SC.LinkRoute>
          </React.Fragment>
        )}
      </SC.Right>
    </SC.Container>
  );
}

export default Header;
