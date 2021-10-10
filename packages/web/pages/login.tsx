import React, { useEffect, useState } from "react";
import { Field, Formik } from "formik";
import Router from "next/router";
import { authApi } from "./api/authApi";
import { RootState } from "../store/reducers";
import { useSelector } from "react-redux";
import { Button, Input, InputField, Text } from "@epass/components";

const Login = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state?.auth?.isAuthenticated
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState<boolean>(false);
  const [passError, setPassError] = useState<boolean>(false);
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/admin");
    } else {
      Router.push("/login");
    }
  }, [isAuthenticated]);

  const onUserChange = (inputValue: string) => {
    setUsername(inputValue);
  };

  const onPassChange = (inputValue: string) => {
    setPassword(inputValue);
  };

  const handleSignin = (event: MouseEvent) => {
    event.preventDefault();
    authApi.logInGetToken(username, password);
  };

  return (
    <div className="flex h-screen items-center mx-auto">
      <div className="max-w-min">
        <Text
          textStyles="text-2xl py-5"
          textLabel="Login to InvestIQ Admin"
          textSize="2xl"
          weight={500}
        />
        <InputField
          onChangeInput={onUserChange}
          value={username}
          containerClass="place-items-center py-5 flex float-right"
          textLabel="Username"
          weight={400}
          placeholder="Username"
          name="username"
          id="username"
          inputClass="mx-2"
          isError={userError}
        />
        <InputField
          onChangeInput={onPassChange}
          value={password}
          containerClass="place-items-center py-5 flex float-right"
          textLabel="Password"
          weight={400}
          placeholder="Password"
          name="password"
          id="password"
          inputClass="mx-2"
          isError={passError}
        />
        <Button
          onClick={() => handleSignin(event as MouseEvent)}
          label="Submit"
          type="submit"
          primary={true}
          labelStyles="text-2xl float-right mr-2"
          lineHeight="none"
          size="extra"
          borderRadius="-none"
        />
      </div>
    </div>
  );
};

export default Login;
