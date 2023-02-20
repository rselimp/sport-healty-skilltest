import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdAccessibility, MdOutlineSnowboarding } from "react-icons/md";

const LastSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-[120px] justify-items-center">
      <div className="relative">
        <Image src="/backimages.jpg" alt="" height={400} width={350} />

        <div className="absolute flex transform -translate-y-1/2 -left-24 bottom-0">
          <div className="border h-[80px] w-[203px] bg-white rounded-lg flex justify-center gap-8 items-center drop-shadow-[0_20px_80px_rgba(51,78,123,0.3)]">
            <div className="flex justify-between gap-6 items-center">
              <div
                className="border rounded-full h-[60px] w-[60px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(45.98deg, #5478EF 19.69%, #D6DFFF 92.63%)",
                }}
              >
                <MdAccessibility className="h-[40px] w-[38px] fill-white"></MdAccessibility>
              </div>
              <div>
                <p className="text-[16px]">
                  800 kall
                  <br />
                  <span className="text-[12px]">Burn fat</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 left-8 top-12">
          <div className="flex justify-between gap-6 items-center">
            <div
              className="border rounded-full h-[60px] w-[60px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(35.49deg, #DD69C7 15.2%, #FFC0F3 87.25%)",
              }}
            >
              <MdAccessibility className="h-[40px] w-[38px] fill-white"></MdAccessibility>
            </div>
          </div>
        </div>
        <div className="absolute flex transform -translate-y-1/2 -right-20 top-1/2">
          <div className="flex justify-between gap-6 items-center">
            <div
              className="border rounded-full h-[60px] w-[60px] flex justify-center items-center"
              style={{
                background:
                  "linear-gradient(50.31deg, #4BACE1 15.91%, #D8F1FF 92.82%)",
              }}
            >
              <MdAccessibility className="h-[40px] w-[38px] fill-white"></MdAccessibility>
            </div>
          </div>
        </div>
      </div>
      <div className="order-first lg:order-last mb-8 lg:mb-0 mx-auto">
        <h1 className="text-[46px] leading-[73px]">
          Best full body <br /> workout to lose fat
        </h1>

        <p className="mb-5">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <button
          type="button"
          class="text-white bg-[#264373] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          <span className="h-[25px] w-[90px]">Get started</span>
          <BsArrowRight className="ml-2 h-[26px] w-[26px]"></BsArrowRight>
        </button>
      </div>
    </div>
  );
};

export default LastSection;
