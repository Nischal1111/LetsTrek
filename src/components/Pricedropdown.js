import React,{useState,useEffect, useContext} from 'react'
import {RiArrowUpSLine,RiArrowDownSLine, RiWallet3Line} from "react-icons/ri"
import {Menu} from "@headlessui/react"
import { TrekContext } from './TrekContext'
const Pricedropdown = () => {
    const {price,setPrice}=useContext(TrekContext)
    const [isOpen,setIsOpen]=useState(false)
    const prices =[
        {
            value : "Price range (any)",
        },
        {
            value : "$0 - $500",
        },
        {
            value : "$500 - $1000",
        },
        {
            value : "$1000 - $1500",
        },
        {
            value : "$1500 - $2000",
        },
        {
            value : "$2000 - $2500",
        },
    ]
return (<>
    <Menu as="div" className="dropdown">
    <Menu.Button className="dropdown-btn" onClick={()=> setIsOpen(!isOpen)}>
        <RiWallet3Line className='mappinline'/>
    <div>
        <div className='days'>
            {price}
        </div>
        <div className='daysp'>Select your price range</div>
    </div>
        {
            isOpen ? <RiArrowDownSLine className='mappinline2'/> : <RiArrowUpSLine className='mappinline2'/>
        }
        </Menu.Button>
        <Menu.Items className="dropdown-menu">
            {prices.map((index)=>{
                return(<Menu.Item as="li" key={index} className="dropdown--li" onClick={()=>setPrice(price.value)}>
                    {price.value}
            </Menu.Item>)
            })}
        </Menu.Items>
</Menu>
</>)
}

export default Pricedropdown
