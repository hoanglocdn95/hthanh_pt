import React, { useState } from "react";
import * as SC from "./style";
import DefaultLayout from "components/DefaultLayout/index";
import Avatar from "assets/avatar.png";
import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

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
  {
    title: "Certification",
    value: "Personal Trainer Certified",
  },
];

function PersonalTrainer() {
  const [dateValue, setDateValue] = useState(new Date());
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
          <Calendar onChange={(e) => setDateValue(e)} value={dateValue} />
        </SC.Right>
      </SC.Container>
    </DefaultLayout>
  );
}

export default PersonalTrainer;
