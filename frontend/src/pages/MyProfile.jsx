import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "John Wick",
    image: assets.profile_pic,
    email: "johnwick@gmail.com",
    phone: "+91-XXXX-XXXX-XX",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly below)
      animate={{ opacity: 1, y: 0 }} // Animate to visible and in place
      transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
      className="max-w-lg mx-auto p-6 rounded-lg"
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
          src={userData.image}
          alt="Profile"
        />
      </div>

      {/* Name */}
      <div className="mt-6 text-center">
        {isEdit ? (
          <input
            className="w-full text-3xl font-bold text-center bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black-500"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="text-3xl font-bold text-neutral-800">{userData.name}</p>
        )}
      </div>

      <hr className="my-3 border-t border-gray-200" />

      {/* Contact Information */}
      <div>
        <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
          Contact Information
        </p>
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <p className="font-medium text-neutral-700">Email:</p>
            <p className="text-blue-500">{userData.email}</p>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <p className="font-medium text-neutral-700">Phone:</p>
            {isEdit ? (
              <input
                className="w-full bg-gray-50 p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <p className="font-medium text-neutral-700">Address:</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  className="w-full bg-gray-50 p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  type="text"
                />
                <input
                  className="w-full bg-gray-50 p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  type="text"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-3 border-t border-gray-200" />

      {/* Basic Information */}
      <div>
        <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">
          Basic Information
        </p>
        <div className="mt-4 space-y-4">
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <p className="font-medium text-neutral-700">Gender:</p>
            {isEdit ? (
              <select
                className="w-full bg-gray-50 p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-4">
            <p className="font-medium text-neutral-700">Date of Birth:</p>
            {isEdit ? (
              <input
                className="w-full bg-gray-50 p-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      {/* Save/Edit Button */}
      <div className="mt-8 flex justify-center">
        <button
          className={`px-8 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
            isEdit
              ? "mt-3 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              : "mt-3 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          }`}
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? "Save Information" : "Edit Profile"}
        </button>
      </div>
    </motion.div>
  );
};

export default MyProfile;