import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";

export default function Signup() {
  return (
    <>
      <div className="bg-orange-300 h-screen w-screen flex justify-center font-mono">
        <div
          id="sigin-form-conatiner"
          className="bg-orange-200 xl:p-8 xl:mx-36    xl:mt-28 rounded-2xl"
        >
          <Heading heading="Sign up" />
          <SubHeading subHeading="Enter your information to create an account" />
          <InputBox inputLabel="First Name" />
          <InputBox inputLabel="Last Name" />
          <InputBox inputLabel="Email" />
          <InputBox inputLabel="Password" />
          <Button btnText="Sign up" />
          <BottomWarning textHere="Existing User ? Click Here" />
        </div>
      </div>
    </>
  );
}
