import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {  

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '');    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const values = {
        aToken,
        setAToken,
        backendUrl,
    };
    return (
        <AdminContext.Provider value={values}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
