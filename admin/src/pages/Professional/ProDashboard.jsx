import React, { useContext, useEffect } from "react";
import { ProContext } from "../../context/ProContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const ProDashboard = () => {
  const { pToken, dashData, getDashData, cancelBooking, completeBooking } =
    useContext(ProContext);
  const { slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (pToken) {
      getDashData();
    }
  }, [pToken]);

  if (!dashData) return null;

  return (
    <div className="p-5 min-h-screen">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <DashboardCard
          icon={assets.earning_icon}
          title="Earnings"
          value={`${currency} ${dashData.earnings}`}
        />
        <DashboardCard
          icon={assets.appointments_icon}
          title="Bookings"
          value={dashData.bookings}
        />
        <DashboardCard
          icon={assets.patients_icon}
          title="Clients"
          value={dashData.clients}
        />
      </div>

      {/* Latest Bookings */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="flex items-center gap-2.5 px-6 py-4 border-b">
          <img src={assets.list_icon} alt="List Icon" className="w-6 h-6" />
          <p className="font-semibold text-lg">Latest Bookings</p>
        </div>

        <div className="divide-y">
          {dashData.latestBookings.slice(0, 5).map((item, index) => (
            <div
              className="flex items-center px-6 py-4 gap-4 hover:bg-gray-100 transition-colors"
              key={index}
            >
              <img
                className="rounded-full w-10 h-10"
                src={item.userData.image}
                alt={item.userData.name}
              />
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{item.userData.name}</p>
                <p className="text-gray-600 text-sm">
                  Booking on {slotDateFormat(item.slotDate)}
                </p>
              </div>
              {item.cancelled ? (
                <p className="text-red-400 text-sm font-medium">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-green-500 text-sm font-medium">Completed</p>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => cancelBooking(item._id)}
                    className="p-2 hover:bg-red-500 rounded-full transition-colors"
                  >
                    <img
                      className="w-10 h-10"
                      src={assets.cancel_icon}
                      alt="Cancel"
                    />
                  </button>
                  <button
                    onClick={() => completeBooking(item._id)}
                    className="p-2 hover:bg-green-500 rounded-full transition-colors"
                  >
                    <img
                      className="w-10 h-10"
                      src={assets.tick_icon}
                      alt="Complete"
                    />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Reusable Dashboard Card Component
const DashboardCard = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 shadow-[11px_10px_0px_rgba(0,0,0,0.70)] bg-white p-6 rounded-lg  border hover:shadow-md transition-shadow">
    <img src={icon} alt={title} className="w-12 h-12" />
    <div>
      <p className="text-2xl font-semibold text-gray-800">{value}</p>
      <p className="text-gray-500">{title}</p>
    </div>
  </div>
);

export default ProDashboard;