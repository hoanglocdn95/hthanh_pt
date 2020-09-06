import React from "react";
import { Form, Field } from "react-final-form";
import UserServer from "services/authen";
import * as SC from "./style";

function Register() {
  const initForm = [
    {
      title: "User Name",
      value: "",
      nameField: "username",
    },
    {
      title: "Password",
      value: "",
      nameField: "password",
      type: "password",
    },
    {
      title: "Confirm Password",
      value: "",
      nameField: "confirmPassword",
      type: "password",
    },
    {
      title: "Name",
      value: "",
      nameField: "name",
    },
    {
      title: "Address",
      value: "",
      nameField: "address",
    },
  ];
  const onSubmit = (values) => {
    const { name, address, username, password, role } = values;
    UserServer.ReqRegister(
      {
        name,
        address,
        username,
        password,
        role: parseInt(role),
      },
      () => {
        alert("register succeed!!!");
        window.history.back();
      }
    );
  };

  return (
    <SC.Container>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          address: "",
          username: "",
          password: "",
          confirmPassword: "",
          role: "",
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <SC.FormContainer onSubmit={handleSubmit}>
            <SC.Label>Are you ... ?</SC.Label>
            <SC.RadioContainer>
              <div>
                <Field name="role" type="radio" value={0}>
                  {(props) => (
                    <SC.RadioOption
                      type="radio"
                      value={0}
                      name={props.input.name}
                      onChange={props.input.checked}
                      onChange={props.input.onChange}
                    />
                  )}
                </Field>
                <SC.Label>Personal Trainer</SC.Label>
              </div>
              <div>
                <Field name="role" type="radio" value={1}>
                  {(props) => (
                    <SC.RadioOption
                      type="radio"
                      value={1}
                      name={props.input.name}
                      onChange={props.input.checked}
                      onChange={props.input.onChange}
                    />
                  )}
                </Field>
                <SC.Label>User</SC.Label>
              </div>
            </SC.RadioContainer>
            {initForm.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <SC.Label htmlFor={item.nameField}>{item.title}</SC.Label>
                  <Field name={item.nameField}>
                    {(props) => (
                      <SC.Input
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                        placeholder={item.title}
                        type={item.type && item.type}
                        required
                      />
                    )}
                  </Field>
                </React.Fragment>
              );
            })}
            <SC.ButtonContainer>
              <SC.Button type="submit">Register</SC.Button>
              <SC.Button type="button" onClick={form.reset}>
                Reset
              </SC.Button>
              <SC.Button onClick={() => window.history.back()}>
                Cancel
              </SC.Button>
            </SC.ButtonContainer>
          </SC.FormContainer>
        )}
      />
    </SC.Container>
  );
}

export default Register;
