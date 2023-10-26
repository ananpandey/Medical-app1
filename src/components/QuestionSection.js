import React, { useState } from "react";
import Accordian1 from "../main/components/Accordian1";
import Accordian2 from "../main/components/Accordian2";
import Accordian3 from "../main/components/Accordian3";
import Accordian4 from "../main/components/Accordian4";
import Accordian5 from "../main/components/Accordian5";

const accordianComponents = [
  Accordian1,
  Accordian2,
  Accordian3,
  Accordian4,
  Accordian5,
];

const QuestionSection = () => {
  const [activeAccordian, setActiveAccordian] = useState(null);

  const handleAccordianClick = (index) => {
    if (activeAccordian === index) {
      setActiveAccordian(null);
    } else {
      setActiveAccordian(index);
    }
  };

  return (
    <div
      className="mt-20 flex flex-col justify-center items-center"
      id="trails"
    >
      <h1 className="text-[ADB3BE] contrast-50 font-semibold">
        HAVE ANY QUESTIONS?
      </h1>
      <h1 className="text-[#050F4E] text-2xl lg:text-4xl mt-6">
        Frequently Asked Questions
      </h1>

      <input
        type="text"
        placeholder="Search service you need...."
        className="w-[437px] h-[55px] bg-[#F6F7F9] mt-4 rounded-md text-center"
      />

      {accordianComponents.map((AccordianComponent, index) => (
        <AccordianComponent
          key={index}
          isOpen={activeAccordian === index + 1}
          onClick={() => handleAccordianClick(index + 1)}
        />
      ))}

      <button className="bg-[#050F4E] py-4 px-10 mt-8 text-white rounded-md">
        Read More
      </button>
    </div>
  );
};

export default QuestionSection;
