import React from "react";

function EachUser({ user = { firstname: "Laalu", lastname: "Dewangan" } }) {
  return (
    <>
      <div className="flex xl:text-lg justify-between xl:p-2 xl:m-2">
        <div id="name-avatar" className="flex xl:text-xl ">
          <div
            id="avatar"
            className="bg-slate-600 xl:w-12 xl:h-12 rounded-full flex justify-center items-center"
          >
            {user.firstname[0]}
          </div>
          <div
            id="name"
            className="flex justify-center items-center xl:pl-4 xl:ml-4 xl:text-2xl"
          >
            {user.firstname} {user.lastname}
          </div>
        </div>
        <div id="btn-container">
          <button className="cursor-pointer">Send Money</button>
        </div>
      </div>
    </>
  );
}

export default EachUser;
