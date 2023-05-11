import React from 'react'

const SingleTrek = ({singleTrek}) => {
    const {price,location,days,title,desc,imgSrc}=singleTrek;
return (
    <div className='singletrek'>
            <img src={imgSrc} alt={title} className='singletrek--img'></img>
        <div className='singlecontainer'>
            <h1 className='singletrek--h1'>{title}</h1>
            <h2 className='singletrek--h2'>{location}</h2>
            <p className='singletrek--p'>{price}</p>
            <h2 className='singletrek--days'>{days}</h2>
        </div>
    </div>
)
}

export default SingleTrek
