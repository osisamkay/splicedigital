import React from "react";

function ProgressBar() {
  const progress = 51;

  return (
    <div className="relative pt-1">
      <div className="overflow-hidden h-7 w-[160px] mb-4 text-xs flex rounded-lg bg-ByeWindGrey-light">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none text-lg font-extrabold px-1  flex flex-col text-center whitespace-nowrap text-ByeWindBlack justify-center bg-[#C6C7F8]"
        >
          In Progress / {`${progress}%`}
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
