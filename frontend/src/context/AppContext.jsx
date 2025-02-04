import { createContext } from "react";
import { Professionals } from "../assets/assets";


export const AppContext = createContext();

const AppContextProvider = (props) => {

    const value = {
        Professionals
    }

    return (
        <AppContext.Provider value={value}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}

export default AppContextProvider