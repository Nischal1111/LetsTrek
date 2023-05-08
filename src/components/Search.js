import React, { useContext } from 'react'
import "../Css/search.css"
import Daysdropdown from './Daysdropdown'
import Pricedropdown from './Pricedropdown'
import Categorydrop from './Categorydrop'
import {RiSearch2Line} from "react-icons/ri"
import { TrekContext } from './TrekContext'

const Search = () => {
    const {handleClick} = useContext(TrekContext)
return (<>
    <div className='search'>
    <Daysdropdown/>
    <Pricedropdown/>
    <button className='searchicon' onClick={handleClick}><RiSearch2Line/></button>
    </div>
    </>
)
}

export default Search
