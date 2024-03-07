import React from "react";

function InputBox({ inputLabel = "inputLabel", inputType = "text", onChange }) {
  return (
    <>
      <div
        id="input-box-container"
        className=" flex flex-col xl:text-lg sm:text-2xl text-black"
      >
        <div
          id="label"
          className="flex justify-start xl:px-2 sm:px-2 font-medium"
        >
          <label>{inputLabel}</label>
        </div>
        <div id="input-feild" className="  xl:py-2 sm:py-1">
          <input
            onChange={onChange}
            type={inputType}
            className="rounded-md xl:p-2 sm:p-1 bg-slate-600 text-slate-50 w-full"
          ></input>
        </div>
      </div>
    </>
  );
}

export default InputBox;
