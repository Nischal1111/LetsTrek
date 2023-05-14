import React,{useState,useEffect,createContext} from 'react'
import TrekData from '../Data/Trekdata'

export const TrekContext = createContext();
const TrekContextProvider = ({children}) => {
    const [trekking,setTrekking]= useState(TrekData)
    const [days,setDays]=useState("Duration (any)")
    const [trekdays,setTrekdays]=useState([])


useEffect(()=>{
    const alltrekdays = trekking.map((singletrek)=>{
        return singletrek.days
    })
    
    const uniquedays = ['Duration (any)', ...new Set(alltrekdays)]
    setTrekdays(uniquedays)
},[])


const handleClick = ()=>{

    const isDefault=(str)=>{
        return str.split(" ").includes("(any)")
    }

    const newTreks = TrekData.filter((trek) => {
        if (trek.days==trekdays){
                return trek;
            }
        if (isDefault(days)){
            return trek;
        }
        if (!isDefault(days)){
            return trek.days===days;
        }
    });
    console.log(newTreks) ;

}



return (
    <TrekContext.Provider value={{trekking,days,setDays,trekdays,setTrekdays,handleClick,
    }}>
        {children}
    </TrekContext.Provider>
)
}

export default TrekContextProvider
