import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HeroCard2 = () => {
  return (
    <div>
      <div className="w-[400px] rounded-xl shadow-xl h-[327px] bg-white flex flex-col justify-center items-center text-center">
        <img src="images/Vector2.png" alt="card" width={40} />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-[#050F4E]">Patients</div>
          <p className=" text-[#000000] text-sm">
            Expanding your clinical trials reach, boosting recritment and
            embracing diversity for inclusive research
          </p>
          <p className="text-[#63D7FB] mt-8 flex justify-center gap-2">
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
export default HeroCard2;
