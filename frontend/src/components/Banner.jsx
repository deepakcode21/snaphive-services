import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col md:flex-row bg-amber-500 rounded-2xl px-6 md:px-10 lg:px-12 shadow-[11px_10px_0px_rgba(0,0,0,0.85)] border-[1px] border-black my-10 mx-4 md:mx-10">
      {/* Decorative Element */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      {/*------------------- Left Side -----------------*/}
      <div className="flex-1 flex flex-col items-start justify-center gap-4 py-8 md:py-10 lg:py-12">
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          <p>Schedule Booking</p>
          <p className="mt-2 sm:mt-4">With 100+ Trusted Professionals</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="flex items-center gap-2 bg-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-gray-600 text-sm sm:text-base hover:scale-105 transition-all duration-300"
        >
          Create Account
        </button>
      </div>

      {/*------------------- Right Side ----------------*/}
      <div className="hidden md:flex md:w-1/2 justify-end">
        <img
          className="w-full max-w-[400px] lg:max-w-[500px] h-auto object-cover rounded-lg"
          src={assets.booking_img}
          alt="Booking"
        />
      </div>
    </div>
  );
};

export default Banner;