import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-teal-600 rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto py-10 md:py-[4vw] md:mb-[-30]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Services <br /> with Trusted Professionals
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted professional,{" "}
            <br className="hidden sm:block" /> Schedule you Bookings
          </p>
        </div>
        <a
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
          href="#category"
        >
          Book Service <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2  relative">
        <img
          className="w-full h-auto md:absolute bottom-0  rounded-lg "
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;
