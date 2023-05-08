import React,{useState,useEffect, useContext} from 'react'
import {RiArrowUpSLine,RiArrowDownSLine, RiWallet3Line} from "react-icons/ri"
import {Menu} from "@headlessui/react"
import { TrekContext } from './TrekContext'
const Pricedropdown = () => {
    const {price,setPrice,pricerange}=useContext(TrekContext)
    console.log(pricerange)
    const [isOpen,setIsOpen]=useState(false)
return (<>
    <Menu as="div" className="dropdown">
    <Menu.Button className="dropdown-btn" onClick={()=> setIsOpen(!isOpen)}>
        <RiWallet3Line className='mappinline'/>
    <div>
        <div className='days'>
            {price}
        </div>
        <div className='daysp'>Select price range</div>
    </div>
        {
            isOpen ? <RiArrowDownSLine className='mappinline2'/> : <RiArrowUpSLine className='mappinline2'/>
        }
        </Menu.Button>
        <Menu.Items className="dropdown-menu">
            {pricerange.map((price)=>{
                return(<Menu.Item as="li" key={price} className="dropdown--li" onClick={()=>setPrice(price)}>
                    {price}
            </Menu.Item>)
            })}
        </Menu.Items>
</Menu>
</>)
}

export default Pricedropdown
