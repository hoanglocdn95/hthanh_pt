import React, { useEffect } from "react";
import { observer } from "mobx-react";
import * as SC from "./style";
import DefaultLayout from "components/DefaultLayout/index";
import Calendar from "components/Calendar/index";
import UserStore from "stores/UserStore";
import Avatar from "assets/avatar.png";
import { Form, Field } from "react-final-form";

const PersonalTrainer = observer(() => {
  // useEffect(() => {
  //   setDay(date.getDate());
  //   setMonth(date.getMonth());
  //   setYear(date.getFullYear());
  //   setStartDay(getStartDayOfMonth(date));
  // }, [date]);
  const { name, address, phoneNumber, certification } = UserStore.infoUser;

  const fakeData = [
    {
      title: "Name",
      value: name,
      nameField: "name",
    },
    {
      title: "Address",
      value: address,
      nameField: "address",
    },
    {
      title: "Phone number",
      value: phoneNumber,
      nameField: "phoneNumber",
    },
    {
      title: "Certification",
      value: certification,
      nameField: "certification",
    },
  ];

  const renderInforText = (data) => {
    return data.map((item, index) => {
      return (
        <SC.Line key={index}>
          <SC.Title>{item.title}</SC.Title>
          <SC.Value>{item.value}</SC.Value>
        </SC.Line>
      );
    });
  };

  const onSubmit = (values) => {
    UserStore.setIsEditing(false);
    UserStore.updateInfoUser(values);
  };

  const renderInforForm = (data) => {
    return (
      <Form
        onSubmit={onSubmit}
        initialValues={{ name, address, phoneNumber, certification }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            {data.map((item, index) => {
              return (
                <SC.Line key={index}>
                  <SC.Title>{item.title}</SC.Title>
                  <Field
                    name={item.nameField}
                    component="input"
                    type="text"
                    placeholder={item.title}
                  />
                </SC.Line>
              );
            })}
            <div style={{ display: "flex" }}>
              <SC.Button type="submit">Save</SC.Button>
              <SC.Button type="button" onClick={form.reset}>
                Reset
              </SC.Button>
            </div>
          </form>
        )}
      />
    );
  };
  return (
    <DefaultLayout>
      <SC.Container>
        <SC.Left>
          <SC.Avatar src={Avatar} alt="" />
          <SC.ProfileContainer>
            {UserStore.isEditing
              ? renderInforForm(fakeData)
              : renderInforText(fakeData)}
          </SC.ProfileContainer>
          <SC.FooterLeft>
            {!UserStore.isEditing && (
              <SC.Button onClick={() => UserStore.setIsEditing(true)}>
                Edit
              </SC.Button>
            )}
          </SC.FooterLeft>
        </SC.Left>
        <SC.Right>
          <SC.HeaderRight>Time Sheet</SC.HeaderRight>
          <Calendar />
        </SC.Right>
      </SC.Container>
    </DefaultLayout>
  );
});

export default PersonalTrainer;
