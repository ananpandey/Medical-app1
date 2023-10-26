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
      <h1 className="text-[ADB3BE] contrast-50 font-semibold sm:mt-[450px] md:mt-[450px] lg:mt-0">
        WHAT MAKE US DIFFERENT?
      </h1>
      <h1 className="text-[#050F4E] text-4xl mt-4">
        We bring solutions to make life easier for our customers.
      </h1>
      <p className="text-sm mt-4 text-[#000000]">
        By ensuring that all individuals, regardless of factors such as age,
        gender,ethnicity, or socioeconomic status, have the <br /> oppotunity to
        engage in these innovative trials, the initiative promotes the
        fundamental principles of inclusion, equality and <br /> diversity
        within the realm of medical research and healthcare services.
      </p>
      <div className="flex flex-col items-center mt-20 sm:mt-10 lg:mt-0 gap-8 sm:flex-row sm:items-start justify-center">
        <SolutionCard1 />
        <SolutionCard2 />
        <SolutionCard3 />
      </div>
    </div>
  );
};
export default SolutionSection;
