import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const ProContext = createContext();

const ProContextPorvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [pToken, setPToken] = useState(localStorage.getItem("pToken") || "");
  const [bookings, setBookings] = useState([]);
  const [dashData, setDashData] = useState(false);
  const [profileData, setProfileData] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // Getting Professional bookings data from Database using API
  const getBookings = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/professional/bookings",
        { headers: { pToken } }
      );

      if (data.success) {
        setBookings(data.bookings.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Getting Professional profile data from Database using API
  const getProfileData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/professional/profile",
        { headers: { pToken } }
      );
      console.log(data.profileData);
      setProfileData(data.profileData);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Function to cancel professional booking using API
  const cancelBooking = async (bookingId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/professional/cancel-booking",
        { bookingId },
        { headers: { pToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getBookings();
        // after creating dashboard
        getDashData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  // Function to Mark booking completed using API
  const completeBooking = async (bookingId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/professional/complete-booking",
        { bookingId },
        { headers: { pToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getBookings();
        // Later after creating getDashData Function
        getDashData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  // Function to create dashboard using API
  const getDashData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/professional/dashboard",
        { headers: { pToken } }
      );

      if (data.success) {
        setDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  // Function to update profile using API
  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        about: profileData.about,
        available: profileData.available,
      };

      const { data } = await axios.post(
        backendUrl + "/api/professional/update-profile",
        updateData,
        { headers: { pToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }

      setIsEdit(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const value = {
    pToken,
    setPToken,
    backendUrl,
    bookings,
    getBookings,
    setBookings,
    cancelBooking,
    completeBooking,
    dashData,
    setDashData,
    getDashData,
    profileData,
    setProfileData,
    getProfileData,
    isEdit,
    setIsEdit,
    updateProfile,
  };

  return (
    <ProContext.Provider value={value}>{props.children}</ProContext.Provider>
  );
};

export default ProContextPorvider;
