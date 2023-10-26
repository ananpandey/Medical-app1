import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  { to: "#", text: "Home" },
  { to: "#access", text: "About Us" },
  { to: "#solutions", text: "Solutions" },
  { to: "#images", text: "images/logo 1.png", isImage: true },
  { to: "#blogs", text: "Blogs" },
  { to: "#trails", text: "Trails" },
  { to: "#contact", text: "Contact Us" },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div
      className="p-6 w-full lg:w-full z-20 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('images/Vector.png')` }}
    >
      <div className="flex justify-center items-center">
        <button
          onClick={toggleDropdown}
          className="lg:hidden md:hidden sm:hidden text-white flex justify-start items-center gap-40"
        >
          <img src="images/logo 1.png" alt="logo" className="w-36 " />
          <FiMenu className="text-2xl text-white" />
        </button>
        <div
          className={`hidden lg:flex md:flex sm:flex gap-16 text-white ${
            isDropdownOpen ? "hidden" : "flex justify-center"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} smooth>
              {link.isImage ? (
                <img src={link.text} alt="logo" className="h-8 w-auto" />
              ) : (
                <span className="text-white">{link.text}</span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {isDropdownOpen && (
        <div className="lg:hidden md:hidden sm:hidden fixed right-[450px] top-16 bg-[#392B85] z-30 flex items-center text-center">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                smooth
                onClick={toggleDropdown}
                className="text-white hover:text-gray-300"
              >
                {link.isImage ? (
                  <img
                    src={link.text}
                    alt="logo"
                    className=" w-auto right-4 h-5"
                  />
                ) : (
                  <span>{link.text}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
