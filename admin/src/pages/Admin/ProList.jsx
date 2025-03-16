import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const ProList = () => {
  const { professionals, aToken, getAllProfessionals, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllProfessionals();
    }
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Professionals</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {professionals.map((item, index) => (
          <div
            className="border-[1px] border-black rounded-xl overflow-hidden cursor-pointer shadow-[11px_10px_0px_rgba(0,0,0,0.85)] hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
            key={index}
          >
            {/* Image Section */}
            <div className="w-full h-48 md:h-56 overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                src={item.image}
                alt={item.name}
                style={{ objectPosition: "top center" }} // Ensure the face is centered
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-2">
              {/* Name and Specialty */}
              <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>

              {/* Availability Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  onChange={() => changeAvailability(item._id)}
                  checked={item.available}
                  readOnly // To make it non-editable
                  className="cursor-pointer"
                />
                <p className="text-sm text-gray-600">
                  {item.available ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProList;
