import React,{useState,useContext} from "react";

const AppContext =React.createContext();
const AppProvider=({children})=>{
    const [isSignupOpen,setIsSignupOpen]=useState(false);

    const openSignup = ()=>{
        setIsSignupOpen(true)
    }
    const closeSignup=()=>{
        setIsSignupOpen(false)
    }
    return <AppContext.Provider value={{isSignupOpen,openSignup,closeSignup}}>{children}</AppContext.Provider>
}

export const useSignContext=()=>{
    return useContext(AppContext);
}
export {AppContext,AppProvider};