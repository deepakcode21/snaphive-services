import React, { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelBooking, dashData } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  return (
    dashData && (
      <div className="p-5 min-h-screen">
        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border-2 shadow-[11px_10px_0px_rgba(0,0,0,0.70)]  hover:shadow-md transition-shadow">
            <img
              className="w-12 h-12"
              src={assets.doctor_icon}
              alt="Professionals"
            />
            <div>
              <p className="text-2xl font-bold text-gray-800">
                {dashData.professionals}
              </p>
              <p className="text-gray-500">Professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border-2 shadow-[11px_10px_0px_rgba(0,0,0,0.70)] hover:shadow-md transition-shadow">
            <img
              className="w-12 h-12"
              src={assets.appointments_icon}
              alt="Bookings"
            />
            <div>
              <p className="text-2xl font-bold text-gray-800">
                {dashData.bookings}
              </p>
              <p className="text-gray-500">Bookings</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-lg border-2 shadow-[11px_10px_0px_rgba(0,0,0,0.70)] hover:shadow-md transition-shadow">
            <img
              className="w-12 h-12"
              src={assets.patients_icon}
              alt="Clients"
            />
            <div>
              <p className="text-2xl font-bold text-gray-800">
                {dashData.clients}
              </p>
              <p className="text-gray-500">Clients</p>
            </div>
          </div>
        </div>

        {/* Latest Bookings Section */}
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 border-b">
            <img
              className="w-6 h-6"
              src={assets.list_icon}
              alt="Latest Bookings"
            />
            <p className="text-lg font-semibold text-gray-800">
              Latest Bookings
            </p>
          </div>

          <div className="divide-y">
            {dashData.latestBookings.map((item, index) => (
              <div
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                key={index}
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={item.proData.image}
                    alt={item.proData.name}
                  />
                  <div>
                    <p className="text-gray-800 font-medium">
                      {item.proData.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Booking on {slotDateFormat(item.slotDate)}
                    </p>
                  </div>
                </div>
                {item.cancelled ? (
                  <p className="text-red-500 text-sm font-medium">Cancelled</p>
                ) : item.isCompleted ? (
                  <p className="text-green-600 text-sm font-medium">
                    Completed
                  </p>
                ) : (
                  <button
                    onClick={() => cancelBooking(item._id)}
                    className="p-2 hover:bg-red-400 rounded-full transition-colors"
                  >
                    <img
                      className="w-10 h-10"
                      src={assets.cancel_icon}
                      alt="Cancel"
                    />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
