import { createContext } from "react";


export const AppContext = createContext()

const AppContextPorvider = (props) => {

    const value = {

    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextPorvider