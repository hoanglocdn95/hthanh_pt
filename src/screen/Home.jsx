import React from "react";
// import { observable, action } from "mobx";
// import { observer } from "mobx-react";
import styled from "styled-components";

import Header from "components/Header/index";

import Banner1 from "assets/banner1.png";
import Banner2 from "assets/banner2.jpg";
import Banner3 from "assets/banner3.jpg";

function Home() {
  return (
    <Container>
      <Header />
      <Body>
        <Section>
          <Title>Personal Trainer!</Title>
          <img src={Banner1} alt="banner1" />
        </Section>
        <Section>
          <Title>Why you need them?</Title>
          <img src={Banner2} alt="banner2" />
        </Section>
        <Section>
          <Title>Reason for why they need Personal Trainer</Title>
          <img src={Banner3} alt="banner3" />
        </Section>
      </Body>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  position: relative;
  flex-direction: column;
`;
const Body = styled.div`
  padding: 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Section = styled.div`
  flex-direction: column;
  display: flex;
  width: fit-content;
  align-items: center;
  margin: 16px;
`;

const Title = styled.h1`
  color: orange;
`;
