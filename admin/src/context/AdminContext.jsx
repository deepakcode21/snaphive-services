import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [professionals, setProfessionals] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [dashData, setDashData] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Function to get all professional using API
  const getAllProfessionals = async () => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/all-professional",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        setProfessionals(data.professionals);
        console.log(data.professionals);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function for change availability of professional using API
  const changeAvailability = async (proId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/change-availability",
        { proId },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        getAllProfessionals();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to get all bookings using API
  const getAllBookings = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/bookings", {
        headers: { aToken },
      });

      if (data.success) {
        setBookings(data.bookings);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Function to cancel booking using API
  const cancelBooking = async (bookingId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/admin/cancel-booking",
        { bookingId },
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAllBookings();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  // Getting Admin Dashboard data from Database using API
  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/admin/dashboard", {
        headers: { aToken },
      });

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

  const values = {
    aToken,
    setAToken,
    backendUrl,
    professionals,
    getAllProfessionals,
    changeAvailability,
    bookings,
    setBookings,
    getAllBookings,
    cancelBooking,
    getDashData,
    dashData,
  };
  return (
    <AdminContext.Provider value={values}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
