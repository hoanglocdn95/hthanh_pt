import React, { useState } from "react";
import * as SC from "./style";
import DefaultLayout from "components/DefaultLayout/index";

const fakeData = [
  {
    title: "Name",
    value: "Huu Thanh",
  },
  {
    title: "Address",
    value: "16 LTK",
  },
  {
    title: "Phone number",
    value: "5425425454",
  },
];

function PersonalTrainer() {
  const renderInfor = (data) => {
    return data.map((item, index) => {
      return (
        <SC.Line key={index}>
          <SC.Title>{item.title}</SC.Title>
          <SC.Value>{item.value}</SC.Value>
        </SC.Line>
      );
    });
  };
  return (
    <DefaultLayout>
      <SC.Container>
        <SC.Left>
          <SC.Avatar />
          <SC.ProfileContainer>{renderInfor(fakeData)}</SC.ProfileContainer>
        </SC.Left>
        <SC.Right></SC.Right>
      </SC.Container>
    </DefaultLayout>
  );
}

export default PersonalTrainer;
