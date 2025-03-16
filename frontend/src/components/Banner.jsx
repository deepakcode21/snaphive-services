import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col md:flex-row bg-white rounded-2xl px-6 md:px-10 lg:px-12 
 shadow-[11px_10px_0px_rgba(0,0,0,0.70)] border-[1px] border-black my-10 mx-4 md:mx-10 
 max-w-screen-xl lg:mx-auto min-h-[200px]"
    >
      {/* Decorative Element */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      {/*------------------- Left Side -----------------*/}
      <div className="flex-1 flex flex-col items-start justify-center gap-4 py-8 md:py-10 lg:py-12">
        <div className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
          <p>Schedule Booking</p>
          <p className="text-3xl mt-2 text-gray-700 sm:mt-4">
            With 100+ Trusted Professionals
          </p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Create Account
        </button>
      </div>

      {/*------------------- Right Side ----------------*/}
      {/* Hide on small screens, show on medium and larger screens */}
      <div className="hidden md:flex md:w-1/2 items-end justify-center">
        <img
          className="w-full h-auto max-h-[280px] object-contain rounded-lg"
          src={assets.booking_img}
          alt="Booking"
        />
      </div>
    </div>
  );
};

export default Banner;
