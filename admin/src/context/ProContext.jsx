import { createContext } from "react";


export const ProContext = createContext()

const ProContextPorvider = (props) => {

    const value = {

    }

    return (
        <ProContext.Provider value={value}>
            {props.children}
        </ProContext.Provider>
    )
}

export default ProContextPorvider