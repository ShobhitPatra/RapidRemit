import React from "react";

function Button({ btnText = "btn-text" }) {
  return (
    <>
      <div id="btn-conatiner" className="flex justify-center xl:mx-12">
        <button className="bg-slate-90  0 text-white xl:p-4 xl:text-2xl sm:text-xl rounded-lg xl:m-3 sm:m-1 hover:bg-slate-300 hover:text-slate-900">
          {btnText}
        </button>
      </div>
    </>
  );
}

export default Button;
