import React, { useState } from "react";
import { observer } from "mobx-react";
import * as SC from "./style";
import DefaultLayout from "components/DefaultLayout/index";
import Calendar from "components/Calendar/index";
import UserStore from "stores/UserStore";
import Avatar from "assets/avatar.png";

function PersonalTrainer() {
  const { name, address, phoneNumber, certification } = UserStore;
  const fakeData = [
    {
      title: "Name",
      value: name,
    },
    {
      title: "Address",
      value: address,
    },
    {
      title: "Phone number",
      value: phoneNumber,
    },
    {
      title: "Certification",
      value: certification,
    },
  ];

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
          <SC.Avatar src={Avatar} alt="" />
          <SC.ProfileContainer>{renderInfor(fakeData)}</SC.ProfileContainer>
        </SC.Left>
        <SC.Right>
          <SC.HeaderRight>Time Sheet</SC.HeaderRight>
          <Calendar />
        </SC.Right>
      </SC.Container>
    </DefaultLayout>
  );
}

export default observer(PersonalTrainer);
