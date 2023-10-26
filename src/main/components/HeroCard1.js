import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HeroCard1 = () => {
  return (
    <div>
      <div className="w-[400px] rounded-xl shadow-xl h-[327px] bg-white flex flex-col justify-center items-center text-center">
        <img src="images/Vector1.png" alt="card" width={40} />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-[#050F4E]">
            Clinicians
          </div>
          <p className=" text-[#000000] text-sm">
            Empowering you to connect your patients, improve patient care
            through clinical trials and expand the range of healthcare
            experiences and choices available.
          </p>
          <p className="text-[#6ED8A1] mt-8 flex justify-center gap-2">
            Learn More
            <span>
              <FiArrowUpRight className="h-7 w-6" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroCard1;
