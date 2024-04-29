import React from "react";
import User from "./User";

const Users = () => {
  return (
    <div className="bg-teal-100 flex flex-col overflow-auto">
      <div className="divider bg-slate-200 h-1"></div>

      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
};

export default Users;
