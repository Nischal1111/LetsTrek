import React from 'react'
import "../Css/news.css"
import {Link} from "react-router-dom"

const Newsletter = () => {
  return (
    <div className='news'>
        <div>
            <h1>
                Do you need any help ?
            </h1>
             <p> Contact us right away</p>  
        </div>
        <button className='news--button'><Link to="/contact">Contact Us</Link></button>
      
    </div>
  )
}

export default Newsletter
