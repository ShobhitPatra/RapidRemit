import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
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
              setUsername(e.target.value);
            }}
            inputLabel="Email"
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            inputLabel="Password"
          />
          <Button
            btnText="Sign up"
            onClick={async () => {
              await axios.post("http://localhost:3000/api/v1/user/signup", {
                firstname,
                lastname,
                username,
                password,
              });
              localStorage.setItem("token", token);
            }}
          />
          <BottomWarning textHere="Existing User ? Click Here" />
        </div>
      </div>
    </>
  );
}
