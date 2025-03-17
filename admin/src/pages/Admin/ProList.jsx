import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";

const ProList = () => {
  const { professionals, aToken, getAllProfessionals, changeAvailability } =
    useContext(AdminContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (aToken) {
      getAllProfessionals();
    }
  }, [aToken]);

  // Calculate the total number of pages
  const totalPages = Math.ceil(professionals.length / itemsPerPage);

  // Get the current page's items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = professionals.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Professionals</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {currentItems.map((item, index) => (
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProList;