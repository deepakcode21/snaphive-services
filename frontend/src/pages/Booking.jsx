import React, { useContext, useEffect, useState, useMemo } from "react";
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

  const fetchProInfo = async () => {
    const proInfo = Professionals.find((pro) => pro._id === proId);
    setProInfo(proInfo);
  };

  const getAvailableSolts = async () => {
    setProSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

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
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
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
      getAvailableSolts();
    }
  }, [proInfo]);

  return proInfo ? (
    <div className="text-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="relative flex flex-col sm:flex-row gap-6 bg-white rounded-2xl shadow-lg border border-black p-6 md:p-8 lg:p-10">
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
                        ? "text-black"
                        : "text-gray-400"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-xs ml-1">
                {rating} ({reviews} reviews)
              </p>
            </div>
          </div>

          <p className="text-gray-700 font-medium mt-4">
            Booking Fee:{" "}
            <span className="text-gray-900">
              {currencySymbol} {proInfo.fees}
            </span>
          </p>
        </div>
      </div>

      <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {proSlots.length &&
            proSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                key={index}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-[#DDDDDD]"
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
                className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "text-[#949494] border border-[#B4B4B4]"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        <button
          onClick={bookServices}
          className="bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6"
        >
          Book an appointment
        </button>
      </div>

      <RelatedPro proID={proId} speciality={proInfo.speciality} />
    </div>
  ) : null;
};

export default Booking;
