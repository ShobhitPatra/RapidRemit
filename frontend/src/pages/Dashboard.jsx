import React from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";

export default function Dashboard() {
  return (
    <>
      <div>
        <Appbar />
      </div>
      <div>
        <Balance />
      </div>
    </>
  );
}
