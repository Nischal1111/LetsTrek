import React, { useContext } from 'react'
import "../Css/search.css"
import Daysdropdown from './Daysdropdown'
import {RiSearch2Line} from "react-icons/ri"
import { TrekContext } from './TrekContext'
import Leveldrop from './Leveldrop'

const Search = () => {
    const {handleClick} = useContext(TrekContext)
return (<>
    <div className='search'>
    <Daysdropdown/>
    <Leveldrop/>
    <button className='searchicon' onClick={handleClick}><RiSearch2Line/></button>
    </div>
    </>
)
}

export default Search
