import React from "react";

function SubHeading({ subHeading = "sub-heading" }) {
  return (
    <>
      <div
        id="sebheading-contanier"
        className="flex justify-center items-center"
      >
        <div className="text-slate-500 xl:text-lg sm:text-2xl xl:p-7 flex flex-wrap">
          {subHeading}
        </div>
      </div>
    </>
  );
}

export default SubHeading;
