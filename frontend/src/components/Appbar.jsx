import React from "react";

export default function Appbar() {
  return (
    <>
      <div
        id="appbar-container"
        className="flex justify-between w-screen xl:p-3 xl:text-3xl"
      >
        <div className=" items-center flex">
          <div id="wallet-title" className="">
            My Wallet
          </div>
        </div>
        <div className="flex items-center">
          <div id="hello">Hello! </div>
          <div
            id="avatar"
            className="bg-gray-500 text-white rounded-full xl:ml-4 flex justify-center items-center h-12 w-12 xl:mb-8 xl:mt-7"
          >
            <div className="xl:text-xl ">U</div>
          </div>
        </div>
      </div>
    </>
  );
}
