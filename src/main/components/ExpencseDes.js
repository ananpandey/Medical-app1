import React from "react";

const ExpencseDes = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-center sm:items-start -mt-10 container mx-auto">
      <div className="mt-6 sm:mt-0">
        <img src="images/Rectangle 43.png" alt="rectangle" />
      </div>
      <div className="flex flex-col justify-center w-full sm:w-[90%] md:w-[80%] lg:w-[620px] h-[465px] shadow-lg items-center text-center bg-white mt-6 sm:mt-0">
        <span>
          <img src="images/star.png" alt="star" />
        </span>
        <p className="mt-6">
          "It is a long established fact that a reader will be <br /> distracted
          by the readable content of a page <br />
          when looking at its layout."
        </p>
        <h1 className="text-[050F4E] font-bold mt-6">Coriss Ambady</h1>
        <p className="mt-1">Neurologist</p>
        <span className="mt-4">
          {/* <img src="images/dot.png" alt="dot" /> */}
        </span>
      </div>
    </div>
  );
};
export default ExpencseDes;
