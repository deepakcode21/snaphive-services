import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const MyBookings = () => {
  const { backendUrl, token } = useContext(AppContext);
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);
  const [payment, setPayment] = useState("");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
  };

  const getUserBookings = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/my-bookings`, {
        headers: { token },
      });
      setBookings(data.bookings.reverse());
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-booking`,
        { bookingId },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserBookings();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const initPay = (order) => {
    if (!order?.id) {
      console.error("Invalid Order ID: Popup will not open.");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Appointment Payment",
      description: "Appointment Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${backendUrl}/api/user/verifyRazorpay`,
            response,
            { headers: { token } }
          );
          if (data.success) {
            navigate("/my-bookings");
            getUserBookings();
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const bookingRazorpay = async (bookingId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/payment-razorpay`,
        { bookingId },
        { headers: { token } }
      );

      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error in bookingRazorpay:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserBookings();
    }
  }, [token]);

  return (
    <div className="p-6 min-h-screen">
      <p className="pb-3 text-2xl text-center font-bold text-black border-b border-gray-200">
        My Bookings
      </p>
      <div className="mt-6 max-w-6xl mx-auto space-y-6"> 
        {bookings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-lg  shadow-[11px_10px_0px_rgba(0,0,0,0.70)] hover:shadow-md transition-shadow duration-300 border border-white"
          >
            <div className="flex-shrink-0">
              <img
                className="w-36 h-36 object-cover rounded-lg bg-[#EAEFFF]"
                src={item.proData.image}
                alt={item.proData.name}
              />
            </div>
            <div className="flex-1 text-sm text-[#5E5E5E]">
              <p className="text-[#262626] text-base font-semibold">
                {item.proData.name}
              </p>
              <p>{item.proData.speciality}</p>
              <p className="text-[#464646] font-medium mt-2">Address:</p>
              <p>{item.proData.address.line1}</p>
              <p>{item.proData.address.line2}</p>
              <p className="mt-2">
                <span className="text-sm text-[#3C3C3C] font-medium">
                  Date & Time:
                </span>{" "}
                {slotDateFormat(item.slotDate)} | {item.slotTime}
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-center sm:w-48">
              {!item.cancelled &&
                !item.payment &&
                !item.isCompleted &&
                payment !== item._id && (
                  <button
                    onClick={() => setPayment(item._id)}
                    className="text-[#696969] w-full py-2 border rounded-lg hover:bg-black hover:text-white transition-all duration-300 hover:shadow-md"
                  >
                    Pay Online
                  </button>
                )}
              {!item.cancelled &&
                !item.payment &&
                !item.isCompleted &&
                payment === item._id && (
                  <button
                    onClick={() => bookingRazorpay(item._id)}
                    className="text-[#696969] w-full py-2 border rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center hover:shadow-md"
                  >
                    <img
                      className="max-w-20 max-h-5"
                      src={assets.razorpay_logo}
                      alt="Razorpay"
                    />
                  </button>
                )}
              {!item.cancelled && item.payment && !item.isCompleted && (
                <button className="w-full py-2 border rounded-lg text-blue-800 bg-blue-50">
                  Paid Success
                </button>
              )}
              {item.isCompleted && (
                <button className="w-full py-2 border bg-green-50 border-green-500 rounded-lg text-green-700 font-bold">
                  Completed
                </button>
              )}
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelBooking(item._id)}
                  className="text-[#696969] w-full py-2 border rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 hover:shadow-md"
                >
                  Cancel Booking
                </button>
              )}
              {item.cancelled && !item.isCompleted && (
                <button className="w-full py-2 border border-red-500 rounded-lg text-red-500">
                  Booking cancelled
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default MyBookings;
