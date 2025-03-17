import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const AllBookings = () => {
  const { aToken, bookings, cancelBooking, getAllBookings } =
    useContext(AdminContext);
  const { slotDateFormat, currency } = useContext(AppContext);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    if (aToken) {
      getAllBookings();
    }
  }, [aToken]);

  // Calculate the current bookings to display
  const indexOfLastBooking = currentPage * itemsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - itemsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full max-w-6xl mx-auto p-2">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">All Bookings</h1>
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[1fr_2fr_3fr_3fr_2fr_1fr_1fr] gap-4 py-4 px-6  bg-black border-b">
          <p className="text-sm font-medium text-white">No.</p>
          <p className="text-sm font-medium text-white">Client</p>
          <p className="text-sm font-medium text-white">Date & Time</p>
          <p className="text-sm font-medium text-white">Professional</p>
          <p className="text-sm font-medium text-white">Fees</p>
          <p className="text-sm font-medium text-white">Status</p>
          <p className="text-sm font-medium text-white">Action</p>
        </div>

        {/* Table Rows */}
        {currentBookings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:grid sm:grid-cols-[1fr_2fr_3fr_3fr_2fr_1fr_1fr] gap-4 items-center py-4 px-6 border-b hover:bg-gray-100 transition-colors duration-200"
          >
            {/* Row Number */}
            <p className="text-sm text-gray-700 max-sm:hidden">{index + 1 + (currentPage - 1) * itemsPerPage}</p>

            {/* Client Info */}
            <div className="flex items-center gap-3">
              <img
                src={item.userData.image}
                alt={item.userData.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm text-gray-800">{item.userData.name}</p>
            </div>

            {/* Date & Time */}
            <p className="text-sm text-gray-700">
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>

            {/* Professional Info */}
            <div className="flex items-center gap-3">
              <img
                src={item.proData.image}
                alt={item.proData.name}
                className="w-8 h-8 rounded-full object-cover bg-gray-200"
              />
              <p className="text-sm text-gray-800">{item.proData.name}</p>
            </div>

            {/* Fees */}
            <p className="text-sm text-gray-700">
              {currency}
              {item.amount}
            </p>

            {/* Status */}
            {item.cancelled ? (
              <p className="text-sm text-red-500 font-medium">Cancelled</p>
            ) : item.isCompleted ? (
              <p className="text-sm text-green-600 font-medium">Completed</p>
            ) : (
              <p className="text-sm text-yellow-600 font-medium">Pending</p>
            )}

            {/* Action */}
            {!item.cancelled && !item.isCompleted && (
              <button
                onClick={() => cancelBooking(item._id)}
                className="p-2 hover:bg-red-400 rounded-full transition-colors duration-200"
                aria-label="Cancel Booking"
              >
                <img
                  src={assets.cancel_icon}
                  alt="Cancel"
                  className="w-10 h-10"
                />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(bookings.length / itemsPerPage) }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={`mx-1 px-4 py-2 rounded-full ${
              currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllBookings;