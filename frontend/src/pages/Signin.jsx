import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

function Signin() {
  return (
    <>
      <div className="bg-slate-300 h-screen w-screen flex justify-center">
        <div id="sigin-form-conatiner" className="bg-slate-200 xl:px-8">
          <Heading heading="Sign in" />
          <SubHeading />
        </div>
      </div>
    </>
  );
}

export default Signin;
