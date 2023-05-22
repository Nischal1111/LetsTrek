import React, { useState } from 'react'
import {Link} from "react-router-dom"


const SingleTrek = ({singleTrek}) => {
    const {price,location,days,title,desc,imgSrc,cln}=singleTrek;
return (
    <div className="singletrek">
        <div className='div--image'>
            <img src={imgSrc} alt={title} className='singletrek--img'></img>
        </div>
        <div className='div--text'>
            <h1 className='singletrek--h1'>{title}</h1>
        <div className='singlecontainer'>
            <h2 className='singletrek--h2'>{location}</h2>
            <h2 className='singletrek--days'><i className="fa-solid fa-clock"></i>{days}</h2>
        </div>
        {/* <div className='singletrek--para'>
            <p>{desc}</p>
        </div> */}
        <div className='Single--btn--p'>
            <p className='singletrek--p'>$ {price}</p>  
            <Link to={`/trek/${singleTrek.id}`}>       
            <button className='singletrek--button'>See More...</button>
            </Link>
        </div>
        </div>
    </div>
)
}

export default SingleTrek
