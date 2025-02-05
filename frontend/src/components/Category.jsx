import React from "react";
import { categoryData } from "../assets/assets";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 my-5 py-16 text-gray-600"
      id="speciality"
    >
      <h1 className="text-3xl font-medium">Our Home Services</h1>
      <p className="sm:w-1/3 text-center text-sm">
        {" "}
        Simply browse through our extensive list of trusted professional,
        Schedule you Bookings
      </p>
      <div className="flex justify-center gap-4 pt-5 w-full overflow-scroll">
        {categoryData.map((item) => (
          <Link
            key={item.id || item.speciality}
            to={`/professional/${item.speciality}`}
          >
            <div className="flex flex-col items-center text-sm font-semibold cursor-pointer flex-shrink-0">
              <img
                className="w-16 sm:w-24 md-2"
                src={item.image}
                alt={item.speciality}
              />
              <p>{item.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
