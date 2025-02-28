import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [Professionals, setProfessionals] = useState([]);

  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );

  const getProfessionalsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/professional/list");
      if (data.success) {
        setProfessionals(data.professionals);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const value = {
    Professionals,
    currencySymbol,
    token,
    setToken,
    backendUrl,
  };

  useEffect(() => {
    getProfessionalsData();
  }, []);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
