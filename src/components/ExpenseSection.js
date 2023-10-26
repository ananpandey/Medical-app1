import React from "react";
import ExpencseDes from "../main/components/ExpencseDes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExpenseSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div
      id="images"
      className="bg-[#F6F7F9] py-16 md:py-24 lg:py-32 h-[450px] mt-24"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-evenly mx-4 md:mx-8 lg:mx-16">
        <div className="text-center md:text-left mr-0 md:mr-20 md:mb-0">
          <h1 className="text-[#ADB3BE] text-3xl md:text-4xl lg:text-lg font-semibold mb-4 md:mb-6">
            SAVE TIME AND MONEY
          </h1>
          <p className="text-[#050F4E] text-xl md:text-2xl lg:text-4xl">
            Find My Trials reduces expenses, accelerates <br /> research, and
            yields quicker advancements, <br /> ultimately saving both time and
            money.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="images/Group.png"
            alt="group"
            className="w-36 md:w-auto lg:w-auto"
          />
        </div>
        <div className="mt-8 md:mt-0">
          <img
            src="images/Group1.png"
            alt="group"
            className="w-36 md:w-auto lg:w-auto"
          />
        </div>
      </div>
      <div className=" container mx-auto">
        <Slider {...settings} className="mt-8">
          {[1, 2, 3].map((index) => (
            <div key={index}>
              <ExpencseDes />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ExpenseSection;
