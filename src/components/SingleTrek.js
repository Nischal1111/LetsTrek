import React, { useState } from 'react'


const SingleTrek = ({singleTrek}) => {
    const {price,location,days,title,desc,imgSrc,cln}=singleTrek;
return (
    <div className={cln}>
        <div>
            <img src={imgSrc} alt={title} className='singletrek--img'></img>
            <h1 className='singletrek--h1'>{title}</h1>
        <div className='singlecontainer'>
            <h2 className='singletrek--h2'>{location}</h2>
            <h2 className='singletrek--days'><i className="fa-solid fa-clock"></i>{days}</h2>
        </div>
        <div className='singletrek--para'>
            <p>{desc}</p>
        </div>
        <div className='Single--btn--p'>
            <button className='singletrek--button'>See More...</button>
            <p className='singletrek--p'> {price}</p>           
        </div>
        </div>
    </div>
)
}

export default SingleTrek
