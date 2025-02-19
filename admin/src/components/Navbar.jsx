import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <nav className="flex justify-between items-center px-4 sm:px-8 md:px-10 lg:px-12 py-3 border-b bg-white shadow-sm">
      {/* Logo and Role Badge */}
      <div className="flex items-center gap-2 sm:gap-3">
        <img
          className="w-32 sm:w-40 md:w-44 lg:w-48"
          src={assets.admin_logo}
          alt="Admin Logo"
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 text-xs sm:text-sm md:text-base">
          {aToken ? "Admin" : "Professional"}
        </p>
      </div>

      {/* Logout Button */}
      <button
        onClick={logout}
        className="px-4 sm:px-6 py-1.5 sm:py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-xs sm:text-sm md:text-base"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;