import React from "react";

const ChooseUpSection = () => {
  return (
    <div
      className="mt-16 md:mt-32 lg:mt-48 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16"
      id="access"
    >
      <h1 className="text-[#ADB3BE] text-xl md:text-4xl lg:text-xl font-semibold mb-4 md:mb-6 mt-20">
        WHY CHOOSE FIND MY TRAILS?
      </h1>
      <p className="text-[#050F4E] text-lg md:text-2xl lg:text-3xl mt-4 md:mt-6">
        We help patients access innovative clinical trials regardless <br /> of
        demographics, location, or venue of care, advocating <br /> for
        inclusion, equality, and diversity.
      </p>
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-16 gap-8">
        <div className="mb-4 md:mb-0 md:mr-10">
          <img
            src="images/Rectangle.png"
            alt="rectangle"
            className="w-40 md:w-auto lg:w-auto"
          />
        </div>
        <div className="flex flex-col text-left">
          <h1 className="text-[#050F4E] text-xl md:text-2xl font-semibold">
            Promoting Inclusion and Equality:
          </h1>
          <p className="text-sm mt-4 text-[#000000] md:text-base lg:text-sm">
            By advocating for inclusivity, the initiative not only advances
            medical science by <br /> gathering diverse and representative data
            but also fosters a more equitable healthcare <br /> system where
            everyone has the chance to benefit from the latest advancements,
            thus <br />
            contributing significantly to the overall improvement of public
            health.
          </p>
          <div className="flex mt-6 md:mt-8 lg:mt-10 gap-2">
            <img
              src="images/Vector4.png"
              alt="vector"
              className="w-5  h-5 lg:w-5 lg:h-5"
            />
            <p className="text-sm text-[#000000] md:text-base lg:text-sm">
              Ensuring patients join trials regardless of background or
              location.
            </p>
          </div>
          <div className="flex mt-2 md:mt-4 lg:mt-6 gap-2">
            <img
              src="images/Vector4.png"
              alt="vector"
              className="w-5 h-5 lg:w-5 lg:h-5"
            />
            <p className="text-sm text-[#000000] md:text-base lg:text-sm">
              Advocating diverse participation, breaking healthcare barriers.
            </p>
          </div>
          <div className="flex mt-2 md:mt-4 lg:mt-6 gap-2">
            <img
              src="images/Vector4.png"
              alt="vector"
              className="w-5 h-5 lg:w-5 lg:h-5"
            />
            <p className="text-sm text-[#000000] md:text-base lg:text-sm">
              Advancing medical science, benefiting all demographic groups.
            </p>
          </div>
          <button className="bg-[#392B85] mt-4 md:mt-6 lg:mt-8 rounded px-8 py-4 md:w-auto lg:w-40 text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUpSection;
