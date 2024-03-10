import React from "react";

function Balance({ amount = "999  " }) {
  return (
    <>
      <div id="balance-conatiner" className="flex xl:text-xl  w-screen xl:p-2 ">
        <div className="xl:ml-2">Your Current Account Balance :</div>
        <div className="xl:ml-2 font-bold">{amount}</div>
      </div>
    </>
  );
}

export default Balance;
