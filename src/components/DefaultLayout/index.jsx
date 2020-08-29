import React from "react";
import styled from "styled-components";

import Header from "components/Header/index";

function DefaultLayout(props) {
  return (
    <Container>
      <Header />
      {props.children}
    </Container>
  );
}
export default DefaultLayout;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  position: relative;
  flex-direction: column;
`;
