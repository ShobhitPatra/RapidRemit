import React from "react";

function BottomWarning({
  textHere = "gdskjfgh  haekjth hfjlksahr",
  anchorLink,
}) {
  return (
    <>
      <div id="btm-warning-container" className="p-2 flex justify-center">
        <span className="text-blue-950 xl:text-lg   ">
          {textHere}
          <a>{anchorLink}</a>
        </span>
      </div>
    </>
  );
}

export default BottomWarning;
