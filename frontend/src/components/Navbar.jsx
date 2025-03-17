import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-3 mb-5 border-b border-gray-200 bg-white shadow-sm px-4 md:px-8">
      {/* Logo */}
      <img
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-medium text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-2 text-gray-700 hover:text-[#020f40] transition-colors ${
              isActive ? "text-[#020f40] font-semibold" : ""
            }`
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/professional"
          className={({ isActive }) =>
            `py-2 text-gray-700 hover:text-[#020f40] transition-colors ${
              isActive ? "text-[#020f40] font-semibold" : ""
            }`
          }
        >
          <li>Professionals</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `py-2 text-gray-700 hover:text-[#020f40] transition-colors ${
              isActive ? "text-[#020f40] font-semibold" : ""
            }`
          }
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `py-2 text-gray-700 hover:text-[#020f40] transition-colors ${
              isActive ? "text-[#020f40] font-semibold" : ""
            }`
          }
        >
          <li>Contact</li>
        </NavLink>
      </ul>

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={userData.image}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-10 right-0 bg-white shadow-lg rounded-lg overflow-hidden z-20 hidden group-hover:block">
              <div className="min-w-48 flex flex-col gap-2 p-4">
                <p
                  onClick={() => {
                    navigate("my-profile");
                    setShowMenu(false);
                  }}
                  className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                >
                  Profile
                </p>
                <p
                  onClick={() => {
                    navigate("my-bookings");
                    setShowMenu(false);
                  }}
                  className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                >
                  Bookings
                </p>
                <p
                  onClick={logout}
                  className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-3">
            {/* Create Account Button */}
            <button
              onClick={() => navigate("/login")}
              className="mt-2 mb-2 px-6 py-2 bg-black text-white rounded-lg flex  gap-2 hover:bg-gray-600 transition-colors duration-300 "
            >
              Create Account
            </button>

            {/* Admin Panel Button */}
            <a
              href="https://snaphive-services.vercel.app/" // Replace with your actual admin panel URL
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mb-2 px-6 py-2 bg-black text-white rounded-lg  gap-2 hover:bg-gray-600 transition-colors duration-300 "
            >
              Admin Panel
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;