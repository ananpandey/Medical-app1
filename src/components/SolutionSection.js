import React from "react";
import SolutionCard1 from "../main/components/SolutionCard1";
import SolutionCard2 from "../main/components/SolutionCard2";
import SolutionCard3 from "../main/components/SolutionCard3";

const SolutionSection = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-center mt-[480px]"
      id="solutions"
    >
      <h1 className="text-[ADB3BE] contrast-50 font-semibold mt-[350px] md:mt-[450px] lg:mt-0">
        WHAT MAKE US DIFFERENT?
      </h1>
      <h1 className="text-[#050F4E] text-2xl lg:text-4xl mt-4">
        We bring solutions to make life easier for our customers.
      </h1>
      <p className="text-sm mt-4 text-[#000000] lg:px-0 px-2">
        By ensuring that all individuals, regardless of factors such as age,
        gender,ethnicity, or socioeconomic status, have the <br /> oppotunity to
        engage in these innovative trials, the initiative promotes the
        fundamental principles of inclusion, equality and <br /> diversity
        within the realm of medical research and healthcare services.
      </p>
      <div className="flex flex-col items-center lg:mt-0 gap-0 lg:gap-8 sm:flex-row sm:items-start justify-center">
        <SolutionCard1 />
        <SolutionCard2 />
        <SolutionCard3 />
      </div>
    </div>
  );
};
export default SolutionSection;
