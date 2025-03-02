import React, { useContext, useEffect, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedPro from "../components/RelatedPro";
import { toast } from "react-toastify";
import axios from "axios";

const Booking = () => {
  const { proId } = useParams();
  const { Professionals, currencySymbol, backendUrl, token, getProfessionalsData } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const navigate = useNavigate();

  const [proInfo, setProInfo] = useState(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    const proData = Professionals.find(pro => pro._id === proId);
    if (proData) setProInfo(proData);
  }, [Professionals, proId]);

  const proSlots = useMemo(() => {
    if (!proInfo) return [];

    return Array.from({ length: 7 }, (_, i) => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      const startTime = new Date(currentDate);
      startTime.setHours(10, 0, 0, 0);

      const endTime = new Date(currentDate);
      endTime.setHours(17, 0, 0, 0);

      const timeSlots = [];
      let currentTime = new Date(startTime);

      while (currentTime <= endTime) {
        timeSlots.push({
          datetime: new Date(currentTime),
          time: currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        });
        currentTime.setHours(currentTime.getHours() + 1);
      }
      return timeSlots;
    });
  }, [proInfo]);

  useEffect(() => {
    setRating(parseFloat((Math.random() * 1.5 + 3.5).toFixed(1)));
    setReviews(Math.floor(Math.random() * 400) + 101);
  }, []);

  const bookServices = async () => {
    if (!token) {
      toast.warn('Login to book services');
      return navigate('/login');
    }
  
    if (!proSlots || proSlots.length === 0 || !proSlots[slotIndex] || proSlots[slotIndex].length === 0) {
      toast.error("No available slots for booking.");
      return;
    }
  
    try {
      const rawDate = proSlots[slotIndex][0]?.datetime;
  
      if (!rawDate) {
        toast.error("Invalid slot selection.");
        return;
      }
  
      const date = new Date(rawDate);  // ✅ Convert to Date object
      console.log("Raw Date from proSlots:", rawDate);

      if (isNaN(date.getTime())) {
        toast.error("Invalid date format.");
        return;
      }
  
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
  
      const slotDate = `${day}-${month}-${year}`;
  
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
  
  
  // JSX Fix - Check if proSlots is available before rendering slots
  {proSlots.length > 0 && proSlots[slotIndex]?.length > 0 ? (
    proSlots[slotIndex].map((item, index) => (
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
    ))
  ) : (
    <p className="text-gray-500">No available slots</p>
  )}
  

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
      <div className="relative flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-lg border border-black p-6 md:p-8 lg:p-10">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />

        <div className="sm:w-72 sm:flex-shrink-0">
          <img className="w-full h-64 sm:h-80 object-cover rounded-lg border border-black" src={proInfo.image} alt={proInfo.name} />
        </div>

        <div className="flex-1">
          <p className="flex items-center gap-2 text-3xl font-semibold">
            {proInfo.name} <img className="w-5" src={assets.verified_icon} alt="verified" />
          </p>
          <p className="text-sm text-gray-700 mt-2">
            {proInfo.degree} - {proInfo.speciality} | {proInfo.experience} Years
          </p>

          <div className="mt-2">
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className={`text-lg ${index < Math.floor(rating) ? "text-black" : "text-gray-400"}`}>★</span>
                ))}
              </div>
              <p className="text-gray-700 text-xs ml-1">
                {rating} ({reviews} reviews)
              </p>
            </div>
          </div>

          <p className="text-gray-700 font-medium mt-4">
            Booking Fee: <span className="text-gray-900">{currencySymbol} {proInfo.fees}</span>
          </p>
        </div>
      </div>

      <div className="mt-8 p-6">
        <p className="text-2xl font-semibold">Booking Slots</p>

        <div className="relative mt-4 flex gap-3 overflow-x-scroll py-4">
          {proSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`flex flex-col items-center min-w-16 py-3 rounded-lg cursor-pointer transition-colors ${
                slotIndex === index ? "bg-black text-white" : "bg-white border border-black hover:bg-gray-200"
              }`}
            >
              <p className="text-sm font-medium">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p className="text-sm">{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-4 flex gap-3 overflow-x-scroll py-4">
          {proSlots[slotIndex]?.map((item, index) => (
            <p key={index} onClick={() => setSlotTime(item.time)}
              className={`text-sm px-5 py-2 rounded-full cursor-pointer ${
                item.time === slotTime ? "bg-black text-white" : "bg-white border border-black hover:bg-gray-200"
              }`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        <button onClick={bookServices} className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-600">Book Your Visit</button>
      </div>

      <RelatedPro proID={proId} speciality={proInfo.speciality} />
    </div>
  );
};

export default Booking;
