import React,{useState,useEffect, useContext} from 'react'
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri"
import {AiFillClockCircle} from "react-icons/ai"
import {Menu} from "@headlessui/react"
import { TrekContext } from './TrekContext'
const Daysdropdown = () => {
    const {days,setDays,trekdays}=useContext(TrekContext)
    const [isOpen,setIsOpen]=useState(false)
return (<>
    <Menu as="div" className="dropdown">
    <Menu.Button className="dropdown-btn" onClick={()=> setIsOpen(!isOpen)}>
        <AiFillClockCircle className='mappinline'/>
    <div>
        <div className='days'>
            {days}
        </div>
        <div className='daysp'>Select your duration</div>
    </div>
        {
            isOpen ? <RiArrowDownSLine className='mappinline2'/> : <RiArrowUpSLine className='mappinline2'/>
        }
        </Menu.Button>
        <Menu.Items className="dropdown-menu">
            {trekdays.map((days)=>{
                return(<Menu.Item as="li" key={days} className="dropdown--li" onClick={()=>setDays(days)}>
                        {days}                    
            </Menu.Item>)
            })}
        </Menu.Items>
</Menu>
</>)
}

export default Daysdropdown
