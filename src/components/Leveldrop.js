import React,{useState,useEffect, useContext} from 'react'
import {RiArrowUpSLine,RiArrowDownSLine} from "react-icons/ri"
import {GiWalk} from "react-icons/gi"
import {Menu} from "@headlessui/react"
import { TrekContext } from './TrekContext'
const Leveldrop = () => {
    const {diff,setDiff,level}=useContext(TrekContext)
    const [isOpen,setIsOpen]=useState(false)
return (<>
    <Menu as="div" className="dropdown">
    <Menu.Button className="dropdown-btn" onClick={()=> setIsOpen(!isOpen)}>
        <GiWalk className='mappinline'/>
    <div>
        <div className='days'>
            {diff}
        </div>
        <div className='daysp'>Select your preference</div>
    </div>
        {
            isOpen ? <RiArrowDownSLine className='mappinline2'/> : <RiArrowUpSLine className='mappinline2'/>
        }
        </Menu.Button>
        <Menu.Items className="dropdown-menu">
            {level.map((diff)=>{
                return(<Menu.Item as="li" key={diff} className="dropdown--li" onClick={()=>setDiff(diff)}>
                        {diff}                    
            </Menu.Item>)
            })}
        </Menu.Items>
</Menu>
</>)
}

export default Leveldrop