import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-200 bg-white shadow-sm px-4 md:px-8">
      {/* Logo */}
      <img 
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
        onClick={() => navigate("/")}
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
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

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
          <ul className="flex flex-col items-center gap-4 py-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `py-2 text-gray-700 hover:text-[#020f40] transition-colors ${
                  isActive ? "text-[#020f40] font-semibold" : ""
                }`
              }
              onClick={() => setShowMenu(false)}
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
              onClick={() => setShowMenu(false)}
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
              onClick={() => setShowMenu(false)}
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
              onClick={() => setShowMenu(false)}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      )}

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg overflow-hidden z-20 hidden group-hover:block">
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
                  onClick={() => setToken(false)}
                  className="py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition-colors"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#020f40] text-white px-6 py-2 rounded-full font-medium hover:bg-[#020f40]/90 transition-colors"
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;