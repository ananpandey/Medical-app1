import React from "react";

const ContactUs = () => {
  return (
    <div
      className="mt-8 md:mt-20 lg:mt-28 flex flex-col md:flex-row w-full md:h-[215px] justify-around"
      id="contact"
    >
      <div className="flex flex-col mb-8 md:mb-0">
        <img src="images/export.png" alt="export" className="md:mr-8" />
        <p className="mt-4 text-[#000000] text-center md:text-left">
          @ 2023 Find My Trials. <br />
          All right reserved.
        </p>
      </div>

      <div className="flex flex-col mb-8 md:mb-0">
        <h1 className="text-[#050F4E] text-2xl font-semibold text-center md:text-left">
          Get In Touch
        </h1>
        <p className="mt-4 text-[#000000] text-center md:text-left">
          Downtown St. 129/04 <br />
          Light City London <br />
          United Kingdom
        </p>
        <p className="mt-4 text-[#000000] text-center md:text-left">
          info@findmytrials.com <br />
          00(123)4567890
        </p>
      </div>

      <div className="flex flex-col mb-8 md:mb-0">
        <h1 className="text-[#050F4E] text-2xl font-semibold text-center md:text-left">
          Learn More
        </h1>
        <p className="mt-4 text-[#000000] text-center md:text-left">
          About Us <br />
          Our Blogs <br />
          Terms of Use <br />
          Privacy Policy <br />
          Contact Us
        </p>
      </div>

      <div className="flex flex-col">
        <h1 className="text-[#050F4E] text-2xl font-semibold text-center md:text-left">
          Our Newsletter
        </h1>
        <p className="mt-4 text-[#000000] text-center md:text-left">
          Subscribe to our newsletter to get <br />
          updates about trials.
        </p>
        <div className="flex flex-col md:flex-row mt-4">
          <input
            type="text"
            placeholder="Enter email address..."
            className="w-full md:w-[200px] h-[55px] bg-[#F6F7F9] rounded-l-md text-center mb-2 md:mb-0"
          />
          <button className="w-full md:w-auto bg-[#050F4E] text-white py-4 px-7 rounded-r-md">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
