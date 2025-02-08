import React, { useContext, useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedPro from "../components/RelatedPro";

const Booking = () => {
  const { proID } = useParams();
  const { Professionals, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [proInfo, setProInfo] = useState(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  // Fetch professional info
  useEffect(() => {
    const proInfo = Professionals.find((pro) => pro._id === proID);
    setProInfo(proInfo);
  }, [Professionals, proID]);

  // Generate available slots (10 AM to 5 PM with 1-hour gap)
  const proSlots = useMemo(() => {
    if (!proInfo) return [];

    const slots = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set start time to 10 AM
      const startTime = new Date(currentDate);
      startTime.setHours(10, 0, 0, 0);

      // Set end time to 5 PM
      const endTime = new Date(currentDate);
      endTime.setHours(17, 0, 0, 0);

      const timeSlots = [];
      let currentTime = new Date(startTime);

      while (currentTime <= endTime) {
        const formattedTime = currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        timeSlots.push({
          datetime: new Date(currentTime),
          time: formattedTime,
        });

        // Increment by 1 hour
        currentTime.setHours(currentTime.getHours() + 1);
      }
      slots.push(timeSlots);
    }
    return slots;
  }, [proInfo]);

  useEffect(() => {
    const randomRating = (Math.random() * 1.5 + 3.5).toFixed(1); // 3.5 to 5.0 // Generate a random rating between 3.5 and 5.0
    const randomReviews = Math.floor(Math.random() * 400) + 101; // 101 to 500 // Generate random reviews between 101 and 500

    setRating(parseFloat(randomRating));
    setReviews(randomReviews);
  }, []);

  if (!proInfo) {
    return (
      <div className="animate-pulse p-6">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
      </div>
    );
  }

  return (
    <div className="text-gray-900 p-4 sm:p-6 lg:p-8">
      {/*---------- Professional Details --------------*/}
      <div className="relative flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-[11px_10px_0px_rgba(0,0,0,0.85)] border-[1px] border-black p-6 md:p-8 lg:p-10">
        {/* Decorative Element */}
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />

        {/* Professional Image */}
        <div className="sm:w-72 sm:flex-shrink-0">
          <img
            className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg border border-black"
            src={proInfo.image}
            alt={proInfo.name}
          />
        </div>

        {/* Professional Info */}
        <div className="flex-1">
          <p className="flex items-center gap-2 text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            {proInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="verified" />
          </p>
          <div className="flex items-center gap-2 text-sm md:text-base mt-2 text-gray-700">
            <p>
              {proInfo.degree} - {proInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border border-black text-xs rounded-full bg-white hover:bg-gray-100 transition-colors">
              {proInfo.experience}
            </button>
          </div>

          {/* Review Section */}
          <div className="mt-2 mb-2">
            {" "}
            {/* Reduced top and bottom margin */}
            <div className="flex items-center">
              <div className="flex space-x-1">
                {" "}
                {/* Reduced spacing between stars */}
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${
                      index < Math.floor(rating)
                        ? "text-black"
                        : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-xs md:text-sm ml-1">
                {rating} ({reviews} reviews)
              </p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-4">
            <p className="flex items-center gap-1 text-lg md:text-xl font-medium text-gray-900">
              About <img className="w-3" src={assets.info_icon} alt="info" />
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-1">
              {proInfo.about}
            </p>
          </div>

          {/* Booking Fee */}
          <p className="text-gray-700 font-medium mt-4">
            Booking Fee:{" "}
            <span className="text-gray-900">
              {currencySymbol} {proInfo.fees}
            </span>
          </p>
        </div>
      </div>

      {/*---------- Booking Slots ----------*/}
      <div className="mt-8 rounded-2xl  p-6 md:p-8 lg:p-10">
        <p className="text-2xl md:text-3xl font-semibold text-gray-900">
          Booking Slots
        </p>

        {/* Date Selection */}
        <div className="relative mt-4">
          <div className="flex gap-3 overflow-x-scroll py-4">
            {proSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`flex flex-col items-center justify-center min-w-16 py-3 rounded-lg cursor-pointer transition-colors ${
                  slotIndex === index
                    ? "bg-black text-white" // Selected state
                    : "bg-white text-gray-900 border border-black hover:bg-gray-200"
                }`}
                key={index}
              >
                <p className="text-sm font-medium">
                  {item[0] && daysOfWeek[item[0].datetime.getDay()]}
                </p>
                <p className="text-sm">
                  {item[0] && item[0].datetime.getDate()}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="relative mt-4">
          <div className="flex gap-3 overflow-x-scroll py-4">
            {proSlots[slotIndex]?.map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-medium flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-colors ${
                  item.time === slotTime
                    ? "bg-black text-white"
                    : "bg-white text-gray-900 border border-black hover:bg-gray-200"
                }`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
          </div>
        </div>

        {/* Book Button */}
        <button className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Book Your Visit
        </button>
      </div>

      {/*--------Listing Related Professional---------*/}
      <div className="mt-12">
        <RelatedPro proID={proID} speciality={proInfo.speciality} />
      </div>
    </div>
  );
};

export default Booking;
