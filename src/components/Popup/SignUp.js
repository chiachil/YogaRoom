import React, { useState, useEffect } from "react";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignUp = ({
  setOpen,
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword,
  setSignup,
}) => {
  const [note, setNote] = useState("");
  const [messageColor, setMessageColor] = useState("");

  async function register() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      setNote("Account created successfully.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setNote(error.message);
      setMessageColor("#8B8B8B");
      if (registerEmail === "" || registerPassword === "") {
        setNote("The field cannot be empty.");
      } else if (error.code === "auth/email-already-in-use") {
        setNote("The Email address has been registered.");
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
        <Title>Sign Up</Title>
        <Input
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
          type="type"
          placeholder="email"
        ></Input>
        <Input
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
          type="password"
          placeholder="password (at least 6 symbols)"
        ></Input>
        <Button onClick={register}>SIGN UP</Button>
        <Note color={messageColor}>{note}</Note>
        <Tab>
          <h3>Have an account?</h3>
          <TabLink
            onClick={() => {
              setOpen(true);
              setSignup(false);
            }}
          >
            Sign In
          </TabLink>
        </Tab>
      </Popup>
    </>
  );
};

export default SignUp;
