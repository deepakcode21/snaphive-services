import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedPro from "../components/RelatedPro";
import { toast } from "react-toastify";
import axios from "axios";

const Booking = () => {
  const { proId } = useParams();
  const {
    Professionals,
    currencySymbol,
    backendUrl,
    token,
    getProfessionalsData,
  } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const navigate = useNavigate();

  const [proInfo, setProInfo] = useState(false);
  const [proSlots, setProSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Function to generate random rating between 3 and 5
  const generateRandomRating = () => {
    return (Math.random() * (5 - 3) + 3).toFixed(1); // Random rating between 3 and 5 with 1 decimal place
  };

  // Function to generate random reviews between 305 and 999
  const generateRandomReviews = () => {
    return Math.floor(Math.random() * (999 - 305 + 1)) + 305; // Random reviews between 305 and 999
  };

  const fetchProInfo = async () => {
    const proInfo = Professionals.find((pro) => pro._id === proId);
    setProInfo(proInfo);

    // Set random rating and reviews
    setRating(generateRandomRating());
    setReviews(generateRandomReviews());
  };

  const getAvailableSlots = async () => {
    setProSlots([]);

    // Get current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // Get date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set start time at 9 AM
      let startTime = new Date(currentDate);
      startTime.setHours(9, 0, 0, 0);

      // Set end time at 5 PM
      let endTime = new Date(currentDate);
      endTime.setHours(17, 0, 0, 0);

      let timeSlots = [];

      while (startTime < endTime) {
        let formattedTime = startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        let day = startTime.getDate();
        let month = startTime.getMonth() + 1;
        let year = startTime.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = formattedTime;

        const isSlotAvailable =
          proInfo.slots_booked[slotDate] &&
          proInfo.slots_booked[slotDate].includes(slotTime)
            ? false
            : true;

        if (isSlotAvailable) {
          // Add slot to array
          timeSlots.push({
            datetime: new Date(startTime),
            time: formattedTime,
          });
        }

        // Increment current time by 1 hour
        startTime.setHours(startTime.getHours() + 1);
      }

      setProSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookServices = async () => {
    if (!token) {
      toast.warning("Login to book services");
      return navigate("/login");
    }

    const date = proSlots[slotIndex][0].datetime;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const slotDate = day + "_" + month + "_" + year;

    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/book-services",
        { proId, slotDate, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getProfessionalsData();
        navigate("/my-bookings");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (Professionals.length > 0) {
      fetchProInfo();
    }
  }, [Professionals, proId]);

  useEffect(() => {
    if (proInfo) {
      getAvailableSlots();
    }
  }, [proInfo]);

  return proInfo ? (
    <div className="text-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="relative flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-[11px_10px_0px_rgba(0,0,0,0.7)] border border-black p-6 md:p-8 lg:p-10">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />

        <div className="sm:w-72 sm:flex-shrink-0">
          <img
            className="w-full h-64 sm:h-80 object-cover rounded-lg border border-black"
            src={proInfo.image}
            alt={proInfo.name}
          />
        </div>

        <div className="flex-1">
          <p className="flex items-center gap-2 text-3xl font-semibold">
            {proInfo.name}{" "}
            <img className="w-5" src={assets.verified_icon} alt="verified" />
          </p>
          <p className="text-sm text-gray-700 mt-2">
            {proInfo.degree} - {proInfo.speciality} | {proInfo.experience} Years
          </p>

          <div className="mt-2">
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${
                      index < Math.floor(rating)
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-xs ml-1">
                {rating} ( {reviews} Reviews )
              </p>
            </div>
          </div>
          {proInfo.about && (
            <div className="mt-4">
              <p className="text-gray-700 font-normal text-sm">
                {proInfo.about}
              </p>
            </div>
          )}

          <p className="text-gray-700 font-medium mt-4">
            Booking Fee:{" "}
            <span className="text-gray-900">
              {currencySymbol} {proInfo.fees}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-8 font-medium text-[#565656]">
        <p>Booking slots</p>
        <div className="flex gap-3 w-full overflow-x-scroll mt-4">
          {proSlots.length &&
            proSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-black text-white"
                    : "border bg-white"
                }`}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {proSlots.length &&
            proSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                key={index}
                className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-black text-white"
                    : "text-black border bg-white"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button
          onClick={bookServices}
          className="mt-6 px-6 py-3 my-7 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
        >
          Book an appointment
        </button>
      </div>

      <RelatedPro proID={proId} speciality={proInfo.speciality} />
    </div>
  ) : null;
};

export default Booking;
