import React from "react";
import DefaultLayout from "components/DefaultLayout/index";

import Banner1 from "assets/banner1.png";
import Banner2 from "assets/banner2.jpg";
import Banner3 from "assets/banner3.jpg";

import * as SC from "./style";

function Home() {
  const Body = () => {
    return (
      <SC.Body>
        <SC.Section>
          <SC.Title>Personal Trainer!</SC.Title>
          <img src={Banner1} alt="banner1" />
        </SC.Section>
        <SC.Section>
          <SC.Title>Why you need them?</SC.Title>
          <img src={Banner2} alt="banner2" />
        </SC.Section>
        <SC.Section>
          <SC.Title>Reason for why they need Personal Trainer</SC.Title>
          <img src={Banner3} alt="banner3" />
        </SC.Section>
      </SC.Body>
    );
  };
  return (
    <DefaultLayout>
      <Body />
    </DefaultLayout>
  );
}

export default Home;
