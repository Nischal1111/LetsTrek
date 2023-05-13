import React,{useState,useEffect,createContext} from 'react'
import TrekData from '../Data/Trekdata'

export const TrekContext = createContext();
const TrekContextProvider = ({children}) => {
    const [trekking,setTrekking]= useState(TrekData)
    const [days,setDays]=useState("Duration (any)")
    const [trekdays,setTrekdays]=useState([])
    const [price,setPrice]=useState("Price range (any)")
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
        return singletrek.price
    })
    console.log(allprices)
    const uniqueprice = ['Price range (any)', ...new Set (allprices)]
    console.log(uniqueprice)
    setPrice(uniqueprice)
},[])
const handleClick = ()=>{
    const isDefault=(str)=>{
        return str.split(" ").includes("(any)")
    }
    console.log(isDefault(days))


    const minPrice=parseInt(price.split('')[0])
    console.log(minPrice)
}



return (
    <TrekContext.Provider value={{trekking,days,setDays,trekdays,setTrekdays,handleClick,
    price,setPrice}}>
        {children}
    </TrekContext.Provider>
)
}

export default TrekContextProvider
