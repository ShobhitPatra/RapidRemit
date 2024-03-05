import React from "react";

function Heading({ heading = "heading" }) {
  return (
    <>
      <div id="heading-container" className=" flex justify-center items-center">
        <div className="xl:text-3xl text-4xl text-slate-800 font-extrabold">
          {heading}
        </div>
      </div>
    </>
  );
}

export default Heading;
