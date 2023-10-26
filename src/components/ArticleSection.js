import React from "react";

const ArticleSection = () => {
  return (
    <div
      className="flex justify-center mt-20"
      style={{
        background: "linear-gradient(to right, #050F4E 50%, white 50%)",
        height: "642px",
      }}
      id="blogs"
    >
      <div className="flex items-center justify-center relative">
        <div className="h-[470px] w-[1264px] bg-white flex justify-around items-center relative shadow-xl rounded-lg">
          <div className="flex flex-col p-8">
            <h1 className="text-[#ADB38E]">Article</h1>
            <h1 className="text-[#050F4E] text-4xl mt-4">
              The Benefits Of Digital Sequence <br /> Information In Biological
              Research.
            </h1>
            <p className="mt-4 text-[#000000] italic font-medium">
              By Matthew Schwartz, Founder & Executive Director
            </p>
            <button className="bg-[#050F4E] py-4 px-8 text-white w-40 rounded-lg mt-12">
              Read More
            </button>
          </div>
          <div className="flex items-center">
            <img src="images/Rectangle2.png" alt="rectangle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection;
