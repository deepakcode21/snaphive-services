import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul className="text-[#515151] mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-gray-100 border-r-4 border-black" : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <img src={assets.home_icon} alt="" />
            <p>Dashbord</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-gray-100 border-r-4 border-black" : ""
              }`
            }
            to={"/all-bookings"}
          >
            <img src={assets.booking_icon} alt="" />
            <p>Bookings</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-gray-100 border-r-4 border-black" : ""
              }`
            }
            to={"/add-professional"}
          >
            <img src={assets.add_icon} alt="" />
            <p>Add Professional</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-gray-100 border-r-4 border-black" : ""
              }`
            }
            to={"/pro-list"}
          >
            <img src={assets.people_icon} alt="" />
            <p>Professional List</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
