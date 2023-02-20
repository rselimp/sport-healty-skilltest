/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import { BsFillPlayCircleFill, BsPlayCircle } from "react-icons/bs";
import { SiAdidas, SiNike, SiPuma, SiReebok } from "react-icons/si";
import { MdAccessibility, MdOutlineSnowboarding } from "react-icons/md";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="relative">
          <Image
            className="mt-5 mr-0 lg:mr-44 "
            src="/gimpicture.jpg"
            alt=""
            height={580}
            width={358}
          />

          <div className="absolute flex transform -translate-y-1/2 -left-32 top-1/3">
            <div className="border h-20 w-[187px] bg-white rounded-lg flex justify-center gap-8 items-center drop-shadow-[0_4px_14px_rgba(0,0,0,0.09)]">
              <div className="flex justify-between gap-6 items-center">
                <div
                  className="border rounded-full h-[60px] w-[60px] flex justify-center items-center"
                  style={{
                    background:
                      "linear-gradient(45deg, #F8A422 13.75%, #FEDEAC 92.08%)",
                  }}
                >
                  <MdAccessibility className="h-[40px] w-[38px] fill-white"></MdAccessibility>
                </div>
                <div>
                  <p className="text-[16px] font-[Poppins] font-bold">
                    150+
                    <br />
                    <span className="text-[12px] font-normal">Members</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 -right-12 lg:right-3 top-1/3">
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
          <div className="absolute flex transform -translate-y-1/2 -left-28 bottom-16">
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
            </div>
          </div>
          <div className="absolute flex transform -translate-y-1/2 -right-14 lg:right-2 bottom-0">
            <div className="border h-[157px] w-[187px] bg-white rounded-lg flex justify-center gap-8 items-center drop-shadow-[0_4px_14px_rgba(0,0,0,0.09)]">
              <div className="text-center">
                <div
                  className="border flex ml-6 items-center justify-center rounded-full h-[60px] w-[60px] "
                  style={{
                    background: "linear-gradient(0deg, #6765f0,#6765f0 92.08%)",
                  }}
                ></div>

                <p className="text-[16px] font-[Poppins] font-bold">
                  Zaqky Simorang
                  <br />
                  <span className="text-[12px] font-normal">Trainer</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-first lg:order-last">
          <div className="mt-20">
            <div className="mb-2">
              <div className="text-[56px] leading-[73px] font-bold mb-6">
                <h1 className="">Healthy in side</h1>
                <span className="text-[#8382EB]">fresh</span> out side
              </div>
              <h2 className="text-[16px] font-normal text-justify w-1/2">
                <span>
                  Exercise is a very important need for our body. Health and
                  fitness will be obtained if you can do regular exercise and
                  run a healthy routine.
                </span>
              </h2>
            </div>
            <div className="flex gap-6">
              <div>
                <button
                  type="button"
                  class="text-white bg-[#264373] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span className="h-[25px] w-[90px]">Get started</span>
                  <IoIosArrowDroprightCircle className="ml-2 h-[26px] w-[26px]"></IoIosArrowDroprightCircle>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="text-gray-900 bg-[#FFFFFF] hover:border-[#264373] focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white mr-2 mb-2 drop-shadow-[0_20px_80px_rgba(51,78,123,0.3)]"
                >
                  <BsFillPlayCircleFill className="mr-2 fill-[#264373] h-[26px] w-[26px] "></BsFillPlayCircleFill>
                  <span className="w-[91px] h-[24px]">Learn More</span>
                </button>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-[16px]">Brands:</p>
            </div>

            <div className="flex gap-4 items-center mt-4">
              <span>
                <SiNike className="w-[58px] h-[27px] fill-[#35507D]"></SiNike>
              </span>
              <span>
                <SiAdidas className="w-[53px] h-[54px] fill-[#35507D]"></SiAdidas>
              </span>
              <span>
                <SiPuma className="w-[80px] h-[41px] fill-[#35507D]"></SiPuma>
              </span>
              <span>
                <SiReebok className="w-[119px] h-[30px] fill-[#35507D]"></SiReebok>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
