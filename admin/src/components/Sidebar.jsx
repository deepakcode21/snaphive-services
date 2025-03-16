import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { ProContext } from "../context/ProContext";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { pToken } = useContext(ProContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300 flex flex-col z-50 ${
          isOpen ? "w-64" : "w-16"
        } md:relative`}
      >
        {/* Toggle Button */}
        <button
          className="absolute top-5 -right-6 bg-black text-white p-2 rounded-full shadow-lg z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "◀" : "▶"}
        </button>

        {/* Sidebar Menu */}
        {aToken && (
          <ul className="mt-16 text-[#515151]">
            {[
              {
                to: "/admin-dashboard",
                icon: assets.home_icon,
                text: "Dashboard",
              },
              {
                to: "/all-bookings",
                icon: assets.booking_icon,
                text: "Bookings",
              },
              {
                to: "/add-professional",
                icon: assets.add_icon,
                text: "Add Professional",
              },
              {
                to: "/pro-list",
                icon: assets.people_icon,
                text: "Professional List",
              },
            ].map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 px-4 cursor-pointer hover:bg-gray-100 transition ${
                    isActive ? "bg-gray-200 border-r-4 border-black" : ""
                  }`
                }
                to={item.to}
              >
                <img src={item.icon} alt="" className="w-6 h-6" />
                <p
                  className={`whitespace-nowrap overflow-hidden transition-all ${
                    isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  {item.text}
                </p>
              </NavLink>
            ))}
          </ul>
        )}

        {pToken && (
          <ul className="mt-16 text-[#515151]">
            {[
              {
                to: "/professional-dashboard",
                icon: assets.home_icon,
                text: "Dashboard",
              },
              {
                to: "/professional-bookings",
                icon: assets.booking_icon,
                text: "Bookings",
              },
              {
                to: "/professional-profile",
                icon: assets.people_icon,
                text: "Profile",
              },
            ].map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-3.5 px-4 cursor-pointer hover:bg-gray-100 transition ${
                    isActive ? "bg-gray-200 border-r-4 border-black" : ""
                  }`
                }
                to={item.to}
              >
                <img src={item.icon} alt="" className="w-6 h-6" />
                <p
                  className={`whitespace-nowrap overflow-hidden transition-all ${
                    isOpen ? "opacity-100 w-auto" : "opacity-0 w-0"
                  }`}
                >
                  {item.text}
                </p>
              </NavLink>
            ))}
          </ul>
        )}
      </div>

      {/* Overlay for Small Screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
