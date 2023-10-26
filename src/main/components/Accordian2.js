import React from "react";

const Accordian2 = ({ isOpen, onClick }) => {
  return (
    <div
      className={`w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1264px] h-[110px] flex justify-between rounded-2xl mt-8 items-center border-2 border-gray-100 ${
        isOpen ? "bg-gray-100" : ""
      }`}
    >
      <div className="flex gap-4 ml-4">
        <img src="images/Group 87.png" alt="group" className="w-8 h-8" />
        <h1 className="text-[#050F4E] text-lg sm:text-base xl:text-lg">
          2. Who can participate in trails?
        </h1>
        {isOpen && (
          <div className="absolute bg-gray-100 px-4 py-2 ml-8 mt-6 font-light text-xs sm:text-sm">
            Use our search feature, input your condition, and explore relevant
            trials matching your criteria.
          </div>
        )}
      </div>
      <div className="mr-4 cursor-pointer" onClick={onClick}>
        <img
          src={isOpen ? "images/Vector8.png" : "images/Vector9.png"}
          alt="vector"
        />
      </div>
    </div>
  );
};

export default Accordian2;
