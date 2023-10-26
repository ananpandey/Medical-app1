import React from "react";

const TrailSection = () => {
  const backgroundStyle = {
    backgroundImage: `url('images/Rectangle3.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="flex justify-center mt-28" id="trails">
      <div
        className=" h-[364px] w-[1264px] flex justify-center items-center flex-col text-center"
        style={backgroundStyle}
      >
        <h1 className="text-white">JOIN OUR COMMUNITY</h1>

        <h1 className="text-xl lg:text-4xl text-white mt-4">
          We are trusted by over
          <span className="text-[#63D8A1] lg:text-5xl text-2xl">
            {" "}
            5000+
          </span>{" "}
          clients.
          <br />
          Join them now and grow your reach with us.
        </h1>
        <button className="bg-[#6ED8A1] text-[#392B85] py-4 px-10 mt-8 rounded-md">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default TrailSection;
