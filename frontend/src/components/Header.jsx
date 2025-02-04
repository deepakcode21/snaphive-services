import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative flex flex-col md:flex-row flex-wrap bg-orange-400 rounded-2xl px-6 md:px-10 lg:px-20 shadow-[11px_10px_0px_rgba(0,0,0,0.85)] border-[1px] border-black">
      {/* Decorative Element */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 m-auto py-10 md:py-[5vw]">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Services <br /> with Trusted Professionals
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img className="w-28" src={assets.group_profiles} alt="" />
          <p>
            Simply browse through our extensive list of trusted professionals,{" "}
            <br className="hidden sm:block" /> Schedule your Bookings
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
      <div className="md:w-1/2 relative">
        <img
          className="w-full h-auto md:absolute bottom-0 rounded-lg"
          src={assets.header_img}
          alt="Header"
        />
      </div>
    </div>
  );
};

export default Header;
