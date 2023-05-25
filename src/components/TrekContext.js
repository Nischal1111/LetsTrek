import React,{useState,useEffect,createContext} from 'react'
import TrekData from '../Data/Trekdata'


export const TrekContext = createContext();
const TrekContextProvider = ({children}) => {
    const [trekking,setTrekking]= useState(TrekData)
    const [days,setDays]=useState("Duration (any)")
    const [trekdays,setTrekdays]=useState([])
    const [loading,setLoading]=useState(false)
    const [diff,setDiff]=useState("Level (any)")
    const [level,setLevel]=useState([])


useEffect(()=>{
    const alltrekdays = trekking.map((singletrek)=>{
        return singletrek.days
    })
    
    const uniquedays = ['Duration (any)', ...new Set(alltrekdays)]
    setTrekdays(uniquedays)
},[])
useEffect(()=>{
    const alllevel = trekking.map((singletrek)=>{
        return singletrek.level
    })
    const uniquelevel = ['Level (any)', ...new Set(alllevel)]
    setLevel(uniquelevel)
},[])

const handleClick = ()=>{

    setLoading(true)

    const isDefault=(str)=>{
        return str.split(" ").includes("(any)")
    }
    const newTreks = TrekData.filter((trek) => {
        if (trek.days==trekdays && trek.level==level){
                return trek;
            }
        
            if (isDefault(days) && isDefault(diff)){
            return trek;
        }
        if (!isDefault(days) && isDefault(diff)){
            return trek.days===days;
        }
        if (!isDefault(diff) && isDefault(days)){
            return trek.level===diff;
        }
        if (!isDefault(diff) && !isDefault(days)){
            return trek.days===days && trek.level==diff;
        }
        

    });
    setTimeout(()=>{
        return (newTreks < 1 ? setTrekking([]):setTrekking(newTreks),
        setLoading(false)
    )},1000)
    }



return (
    <TrekContext.Provider value={{trekking,days,setDays,trekdays,setTrekdays,diff,setDiff,level,setLevel,handleClick,loading,setLoading
    }}>
        {children}
    </TrekContext.Provider>
)
}

export default TrekContextProvider
