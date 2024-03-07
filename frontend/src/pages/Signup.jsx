import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-orange-300 h-screen w-screen flex justify-center font-mono">
        <div
          id="sigin-form-conatiner"
          className="bg-orange-200 xl:p-8 xl:mx-36    xl:mt-28 rounded-2xl"
        >
          <Heading heading="Sign up" />
          <SubHeading subHeading="Enter your information to create an account" />
          <InputBox
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            inputLabel="First Name"
          />
          <InputBox
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            inputLabel="Last Name"
          />
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            inputLabel="Email"
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            inputLabel="Password"
          />
          <Button btnText="Sign up" />
          <BottomWarning textHere="Existing User ? Click Here" />
        </div>
      </div>
    </>
  );
}
