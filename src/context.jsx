import React from "react";


const appContext = React.createContext();

const AppProvider = ({children}) =>{
    return <appContext.Provider value={'NUBTK PROJECT'}>
               {children}
           </appContext.Provider>
}

export {appContext,AppProvider}