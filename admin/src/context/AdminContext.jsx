import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [professionals, setProfessionals] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL

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

  const values = {
    aToken,
    setAToken,
    backendUrl,
    professionals,
    getAllProfessionals
  };
  return (
    <AdminContext.Provider value={values}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
