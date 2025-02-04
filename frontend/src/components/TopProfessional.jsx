import React from "react";
import { Professionals } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const TopProfessional = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-6 my-20 text-gray-900 md:mx-10">
      <h1 className="text-3xl text-center sm:w-1/2 font-medium">Top Professionals to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      {/* Responsive Grid Fix */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-3 sm:px-0 pt-6">
        {Professionals.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/booking/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-white shadow-md h-auto flex flex-col justify-between"
            key={index}
          >
            {/* Fixed Image Resizing Issue */}
            <img className=" w-full h-40 md:h-60 object-cover" src={item.image} alt={item.name} />
            
            <div className="p-4">
              <div className="flex items-center gap-2 text-green-500 mb-2">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        More
      </button>
    </div>
  );
};

export default TopProfessional;
