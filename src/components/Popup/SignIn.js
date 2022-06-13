import React, { useState, useContext } from "react";
import { LoginContext } from "../../context/userContext";

import {
  PopBG,
  Popup,
  Title,
  Input,
  Button,
  Tab,
  TabLink,
  Note,
} from "./style/sharedStyle";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignIn = ({
  setOpen,
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  setSignup,
}) => {
  const [note, setNote] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const { setLoggedIn } = useContext(LoginContext);

  async function login() {
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setMessageColor("#383838");
      setNote("Sign In Successfully!");
      const uid = data.user.uid;
      console.log(uid);
      setLoggedIn(uid);
    } catch (error) {
      setMessageColor("#8B8B8B");
      if (loginEmail === "" || loginPassword === "") {
        setNote("The field cannot be empty");
      } else if (error.code === "auth/user-not-found") {
        setNote("Email address has not been registered");
      } else {
        setNote("Email or password input error");
      }
    }
  }

  return (
    <>
      <PopBG
        onClick={() => {
          setOpen(false);
          setSignup(false);
        }}
      ></PopBG>
      <Popup>
        <Title>Sign In</Title>
        <Input
          onChange={(e) => {
            setLoginEmail(e.target.value);
            setNote("");
          }}
          type="type"
          placeholder="email"
          value={loginEmail}
        ></Input>
        <Input
          onChange={(e) => {
            setLoginPassword(e.target.value);
            setNote("");
          }}
          type="password"
          placeholder="password"
          value={loginPassword}
        ></Input>
        <Button onClick={login}>SIGN IN</Button>
        <Note color={messageColor}>{note}</Note>
        <Tab>
          <h3>Need an account?</h3>
          <TabLink
            onClick={() => {
              setOpen(false);
              setSignup(true);
            }}
          >
            Sign Up
          </TabLink>
        </Tab>
      </Popup>
    </>
  );
};

export default SignIn;
