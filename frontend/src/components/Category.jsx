import React from "react";
import { categoryData } from "../assets/assets";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-600"
      id="category"
    >
      <h1 className="text-3xl font-medium">Our Home Services</h1>
      <p className="sm:w-1/3 text-center text-sm">
        {" "}
        Simply browse through our extensive list of trusted professional,
        Schedule you Bookings
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {categoryData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-sm font-semibold  cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 "
            to={`/professional/${item.category}`}
          >
            <img className="w-16 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
