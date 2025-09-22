import React from "react";
import {
  FaF,
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111]">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        {/* 1'st Footer */}
        <div>
          <h1 className="text-[24px] text-white mb-[1rem] font-bold uppercase">
            Jopify
          </h1>
          <p className="text-[14px] text-white text-opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eius
            suscipit ab repellat eligendi sunt atque quaerat at molestiae!
          </p>
          {/* Special icons */}
          <div className="mt-[1.5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col">
              <FaFacebookF className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-black-600 rounded-full flex items-center justify-center flex-col">
              <FaXTwitter className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col">
              <FaYoutube className="text-white" />
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-500 rounded-full flex items-center justify-center flex-col">
              <FaInstagram className="text-white" />
            </div>
          </div>
        </div>
        {/* 2'nd part Footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About Us
          </h1>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Policy
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Application
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Candidates
          </p>
        </div>
        {/* 3'rd part of Footer */}
        {/* 2'nd part Footer */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h1>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Job Details
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            How to Apply
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Resume
          </p>
        </div>
        {/* 4'th part of Footr */}
        <div>
          <h1 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get In Touch
          </h1>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            +241 593 4512
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            example@gmail.com
          </p>
          <p className="text-[15px] w-fit text-gray-400 hover:text-yellow-300 cursor-pointer text-opacity-30 mb-[0.7rem]">
            Lemi-Kura, Addis-Ababa, Ethiopia
          </p>
        </div>
      </div>
      <h1 className="mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50">
        Copyright By Webdev Warrior - 2025
      </h1>
    </div>
  );
};

export default Footer;
