import React from "react";
import HeroCard1 from "../main/components/HeroCard1";
import HeroCard2 from "../main/components/HeroCard2";
import HeroCard3 from "../main/components/HeroCard3";

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: `url('images/Vector.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={backgroundStyle}
      className="lg:h-[675px] sm:h-[1370px]"
      id="hero"
    >
      <div className="flex justify-center items-center">
        <div className="flex flex-col mt-10 sm:mt-20 items-center">
          <span className="relative mt-10">
            <img src="images/icon 2.png" alt="logo" />
          </span>
          <span className="text-white text-3xl absolute top-[200px] lg:text-6xl sm:mt-8 text-center">
            Access Innovative <br />
            Healthcare
          </span>
          <span className="text-white text-sm sm:text-base top-[300px] lg:top-[350px] sm:mt-4 contrast-75 text-center absolute">
            Empowering primary care professionals to seamlessly identify and
            engage <br /> with eligible patients for clinical trial
            opportunities.
          </span>
          <button className="bg-white text-[#392B85] text-sm sm:text-base mt-4 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 text-center rounded absolute top-96 lg:top-[420px]">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center mt-32 sm:mt-52 lg:mt-52 gap-6 sm:flex-row sm:items-start justify-center ">
        <HeroCard1 className="mb-6 sm:mb-0" />
        <HeroCard2 className="mb-6 sm:mb-0" />
        <HeroCard3 className="mb-6 sm:mb-0" />
      </div>
    </div>
  );
};

export default HeroSection;
