import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const navToggleHandler = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="navbar flex flex-row justify-between mt-[51px] mb-10 mx-auto">
      <li className="cursor-pointer">
        <button
          button
          className="bg-[#6765F0] text-xl text-white px-2 rounded-lg md:ml-8 items-center
  duration-500"
        >
          Gym
        </button>
        <span className="text-[#6765F0] ml-1 text-xl">baran</span>
      </li>

      <div className="">
        <ul
          className={` ${
            !showNav ? "-translate-x-[100%]" : "translate-x-0"
          } md:translate-x-0 flex flex-col md:top-0 absolute md:relative top-32 left-0 md:bg-inherit w-[100%] md:flex-row justify-center items-center font-[Poppins]`}
        >
          <li className="px-[39px] cursor-pointer text-[16px]">Home</li>
          <li className="px-[30px] cursor-pointer text-[16px]">Program</li>
          <li className="px-[30px] cursor-pointer text-[16px]">Blog</li>
          <li className="px-[39px] cursor-pointer text-[16px]">About Us</li>
          <li className="cursor-pointer">
            <button
              button
              className="bg-[#264373] text-white font-[Poppins] py-2 px-4 ml-2 rounded md:ml-8
  duration-500 text-[16px]"
            >
              Login
            </button>
          </li>
        </ul>
        <div className="md:hidden">
          {!showNav ? (
            <MdMenu onClick={navToggleHandler} className="text-2xl" />
          ) : (
            <MdClose onClick={navToggleHandler} className="text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
