import React,{useState,useEffect,createContext, useContext, Children} from 'react'
import TrekData from '../Data/Trekdata'

export const TrekContext = createContext();
const TrekContextProvider = ({children}) => {
    const [trekking,setTrekking]= useState(TrekData)
    const [days,setDays]=useState("Duration (any)")
    const [trekdays,setTrekdays]=useState([])
    const [price,setPrice]=useState("Price range (any)")
    const [pricerange,setPriceRange]=useState([])

useEffect(()=>{
    const alltrekdays = trekking.map((singletrek)=>{
        return singletrek.days
    })
    console.log(alltrekdays)
    const uniquedays = ['Duration (any)', ...new Set(alltrekdays)]
    console.log(uniquedays)
    setTrekdays(uniquedays)
},[])
useEffect(()=>{
    const allprices = trekking.map((singletrek)=>{
        return singletrek.pricerange
    })
    console.log(allprices)
    const uniqueprice = ['Price range (any)', ...new Set (allprices)]
    console.log(uniqueprice)
    setPriceRange(uniqueprice)
},[])
const handleClick = ()=>{
    console.log("clicked")
}



return (
    <TrekContext.Provider value={{trekking,days,setDays,trekdays,setTrekdays,handleClick,
    price,setPrice,pricerange,setPriceRange}}>
        {children}
    </TrekContext.Provider>
)
}

export default TrekContextProvider
