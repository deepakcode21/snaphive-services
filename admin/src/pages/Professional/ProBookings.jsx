import React from "react";
import { useContext, useEffect } from "react";
import { ProContext } from "../../context/ProContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const ProBookings = () => {
  const { pToken, bookings, getBookings, cancelBooking, completeBooking } =
    useContext(ProContext);
  const { slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (pToken) {
      getBookings();
    }
  }, [pToken]);

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <p className="mb-5 text-xl font-semibold text-gray-800">All Bookings</p>

      <div className="bg-white border border-black rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-8 py-4 px-6 bg-black  border-b border-gray-200">
          <p className="font-medium text-white">No.</p>
          <p className="font-medium text-white">Clients</p>
          <p className="font-medium text-white">Payment</p>
          <p className="font-medium text-white">Date & Time</p>
          <p className="font-medium text-white">Fees</p>
          <p className="font-medium text-white">Status</p>
          <p className="font-medium text-white">Action</p>
        </div>

        {/* Table Rows */}
        <div className="max-h-[70vh] overflow-y-auto">
          {bookings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:grid sm:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-8 items-center p-4 border-b border-gray-200 bg-white hover:bg-gray-100 transition-colors"
            >
              {/* Row Number */}
              <p className="hidden sm:block text-sm text-gray-500">
                {index + 1}
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-2">
                <img
                  src={item.userData.image}
                  alt={item.userData.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <p className="text-sm font-medium text-gray-700">
                  {item.userData.name}
                </p>
              </div>

              {/* Payment Method */}
              <div>
                <p
                  className={`text-xs inline-block px-3 py-1 rounded-full ${
                    item.payment
                      ? "bg-blue-50 text-blue-600 border border-blue-100"
                      : "bg-green-50 text-green-600 border border-green-100"
                  }`}
                >
                  {item.payment ? "Online" : "CASH"}
                </p>
              </div>

              {/* Date & Time */}
              <p className="text-sm text-gray-600">
                {slotDateFormat(item.slotDate)}, {item.slotTime}
              </p>

              {/* Fees */}
              <p className="text-sm font-medium text-gray-700">
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

              {/* Actions */}
              <div className="flex items-center gap-2">
                {!item.cancelled && !item.isCompleted && (
                  <>
                    <button
                      onClick={() => cancelBooking(item._id)}
                      className="p-2  hover:bg-red-500 rounded-full transition-colors"
                    >
                      <img
                        src={assets.cancel_icon}
                        alt="Cancel"
                        className="w-10 h-10"
                      />
                    </button>
                    <button
                      onClick={() => completeBooking(item._id)}
                      className="p-2 hover:bg-green-500 rounded-full transition-colors"
                    >
                      <img
                        src={assets.tick_icon}
                        alt="Complete"
                        className="w-10 h-10 "
                      />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProBookings;
