import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const RelatedPro = ({ speciality, proID }) => {
  const { Professionals } = useContext(AppContext);

  const [relatedPro, setRelatedPro] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Professionals.length > 0 && speciality) {
      const ProfessionalsData = Professionals.filter(
        (pro) => pro.speciality === speciality && pro._id !== proID
      );
      setRelatedPro(ProfessionalsData);
    }
  }, [Professionals, speciality, proID]);

  return (
    <div className="flex flex-col items-center gap-3 text-gray-900 md:mx-10">
      <h1 className="text-3xl text-center sm:w-1/2 font-medium">
        Related Professionals
      </h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted professionals.
      </p>

      {/* Responsive Grid with Improved Styling */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-3 sm:px-0 pt-6">
        {relatedPro.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/booking/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border-[1px] border-black rounded-xl overflow-hidden cursor-pointer shadow-[11px_10px_0px_rgba(0,0,0,0.85)] hover:shadow-lg transition-all duration-300 bg-white flex flex-col justify-between"
            key={index}
          >
            {/* Improved Image Handling */}
            <div className="w-full h-48 md:h-56 overflow-hidden flex items-center justify-center">
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                src={item.image}
                alt={item.name}
                style={{ objectPosition: "top center" }} // Ensure the face is centered
              />
            </div>

            {/* Enhanced Card Content */}
            <div className="p-4 flex flex-col gap-2">
              <div
                className={`flex items-center gap-2 ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`w-2 h-2 ${
                    item.available ? " bg-green-500" : "bg-gray-500"
                  } rounded-full`}
                ></span>
                <p className="text-sm">
                  {item.available ? "Available" : "Not Available"}
                </p>
              </div>
              <p className="text-gray-900 text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-black">★</span>
                <span className="text-sm text-gray-600">
                  {item.rating || "4.5"}
                </span>
                <span className="text-sm text-gray-400">
                  ({item.reviews || "100"} reviews)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPro;
