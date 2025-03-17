import React, { useContext, useEffect, useState } from "react";
import { ProContext } from "../../context/ProContext";
import { AppContext } from "../../context/AppContext";

const ProProfile = () => {
  const {
    pToken,
    profileData,
    setProfileData,
    getProfileData,
    isEdit,
    setIsEdit,
    updateProfile,
  } = useContext(ProContext);
  const { currency } = useContext(AppContext);

  useEffect(() => {
    if (pToken) {
      getProfileData();
    }
  }, [pToken]);

  return (
    profileData && (
      <div className="min-h-screen  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-[11px_10px_0px_rgba(0,0,0,0.70)] rounded-lg border overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              {/* Profile Image */}
              <div className="sm:w-1/3 p-6 bg-primary/80 flex items-center justify-center">
                <img
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-black"
                  src={profileData.image}
                  alt={profileData.name}
                />
              </div>

              {/* Profile Details */}
              <div className="sm:w-2/3 p-6">
                {/* Name and Degree */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-800">
                    {profileData.name}
                  </h1>
                  <div className="flex items-center mt-2">
                    <p className="text-gray-600">
                      {profileData.degree} - {profileData.speciality}
                    </p>
                    <span className="ml-2 px-2 py-1 text-xs font-semibold bg-gray-200 rounded-full">
                      {profileData.experience} experience
                    </span>
                  </div>
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    About
                  </h2>
                  {isEdit ? (
                    <textarea
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          about: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      rows={4}
                      value={profileData.about}
                    />
                  ) : (
                    <p className="text-gray-600">{profileData.about}</p>
                  )}
                </div>

                {/* Appointment Fee */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Booking Fee
                  </h2>
                  {isEdit ? (
                    <input
                      type="number"
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          fees: e.target.value,
                        }))
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      value={profileData.fees}
                    />
                  ) : (
                    <p className="text-gray-600">
                      {currency} {profileData.fees}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Address
                  </h2>
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line1: e.target.value },
                          }))
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                        value={profileData.address.line1}
                      />
                      <input
                        type="text"
                        onChange={(e) =>
                          setProfileData((prev) => ({
                            ...prev,
                            address: { ...prev.address, line2: e.target.value },
                          }))
                        }
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        value={profileData.address.line2}
                      />
                    </>
                  ) : (
                    <p className="text-gray-600">
                      {profileData.address.line1}
                      <br />
                      {profileData.address.line2}
                    </p>
                  )}
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={() =>
                        isEdit &&
                        setProfileData((prev) => ({
                          ...prev,
                          available: !prev.available,
                        }))
                      }
                      checked={profileData.available}
                      className="form-checkbox h-5 w-5 text-primary"
                    />
                    <span className="ml-2 text-gray-700">Available</span>
                  </label>
                </div>

                {/* Edit/Save Button */}
                <div className="flex justify-center">
                  {isEdit ? (
                    <button
                      onClick={updateProfile}
                      className="mt-6 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEdit((prev) => !prev)}
                      className="mt-6 px-10 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProProfile;