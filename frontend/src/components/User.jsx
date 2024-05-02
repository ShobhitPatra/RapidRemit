import React from "react";

const User = ({ firstname, lastname }) => {
  return (
    <div className="bg-teal-100  ">
      <div className="flex justify-between mx-2 my-4 bg-orange-100 hover:bg-orange-50  rounded-sm">
        <div
          id="name"
          className="text-xl p-2 text-slate-700 flex justify-center items-center"
        >
          {firstname} {lastname}
        </div>
        <button className="text-white bg-slate-800 rounded-md p-2 m-2 hover:bg-slate-700">
          Send Money
        </button>
      </div>
      <div className="divider bg-slate-200 h-1"></div>
    </div>
  );
};

export default User;
