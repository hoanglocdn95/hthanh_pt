import React, { useState } from "react";
import * as SC from "./style";
import { useHistory } from "react-router-dom";
import { RouterConstant } from "constants";
import { Form, Field } from "react-final-form";
import UserServer from "services/authen";

function Login() {
  const history = useHistory();

  const onSubmit = (values) => {
    UserServer.ReqLogin(values, (result) => {
      localStorage.setItem("currentUser", JSON.stringify(result.data));
      history.push(RouterConstant.PersonalTrainer);
    });
  };
  return (
    <SC.Container>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          password: "",
        }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <SC.FormContainer onSubmit={handleSubmit}>
            <SC.Label htmlFor="username">User Name</SC.Label>
            <Field name="username">
              {(props) => (
                <SC.Input
                  name="username"
                  value={props.input.value}
                  onChange={props.input.onChange}
                  placeholder="User Name"
                  type="text"
                  required
                />
              )}
            </Field>
            <SC.Label htmlFor="password">Password</SC.Label>
            <Field name="password">
              {(props) => (
                <SC.Input
                  name="password"
                  value={props.input.value}
                  onChange={props.input.onChange}
                  placeholder="Password"
                  type="password"
                  required
                />
              )}
            </Field>
            <SC.ButtonContainer>
              <SC.Button type="submit">Login</SC.Button>
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

export default Login;
