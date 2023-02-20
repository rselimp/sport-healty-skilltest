import React from "react";
import { GrAccessibility } from "react-icons/gr";
import { MdAccessibility, MdOutlineSnowboarding } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

const MiddleSection = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-1 lg:mr-0 lg:grid-cols-3 h-[400px] lg:h-[274px] justify-items-center items-center rounded-[30px]"
      style={{
        background: "linear-gradient(87.05deg, #6462F0 0%, #9190E9 95.5%)",
      }}
    >
      <div className="flex gap-4">
        <div className="border rounded-[20px] h-[100px] w-[100px] flex justify-center items-center ">
          <MdAccessibility className="h-[40px] w-[38px] fill-[#FFFFFF]"></MdAccessibility>
        </div>
        <div>
          <p className="text-white">
            Get that 11 line <br /> in 30 days
          </p>
          <br />
          <div className="flex items-center gap-2">
            <span className="opacity-[0.5]">Learn more</span>
            <span>
              <BsArrowRight className="fill-white"></BsArrowRight>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="border rounded-[20px] h-[100px] w-[100px] flex justify-center items-center">
          <MdAccessibility className="h-[40px] w-[38px] fill-[#FFFFFF]"></MdAccessibility>
        </div>
        <div>
          <p className="text-white">
            Get that 11 line <br /> in 30 days
          </p>
          <br />
          <div className="flex items-center gap-2">
            <span className="opacity-[0.5] te">Learn more</span>
            <span>
              <BsArrowRight className="fill-white"></BsArrowRight>
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="border rounded-[20px] h-[100px] w-[100px] flex justify-center items-center">
          <MdOutlineSnowboarding className="h-[40px] w-[38px] fill-[#FFFFFF]"></MdOutlineSnowboarding>
        </div>
        <div>
          <p className="text-white">
            Get that 11 line <br /> in 30 days
          </p>
          <br />
          <div className="flex items-center gap-2">
            <span className="opacity-[0.5]">Learn more </span>
            <span>
              <BsArrowRight></BsArrowRight>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
