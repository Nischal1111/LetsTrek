import React from 'react'
import "../Css/Booking.css"

const Booking = ({trek}) => {
    console.log(trek)
return (
    <div className='booking'>
        <div className="booking--top" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <span style={{fontSize:"22px",color:"#314f73"}}><h3 style={{fontFamily:"geneva",color:"#5889c5",fontSize:"28px"}}>{trek.price}</h3>/ per person</span>
            <span className='rate'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span><i className="fa-solid fa-star-half-alt"></i>4.6 (13)</span>
            </span> 
        </div>
    </div>
)
}

export default Booking
