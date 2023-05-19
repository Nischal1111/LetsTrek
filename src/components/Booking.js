import React from 'react'
import "../Css/Booking.css"

const Booking = ({trek}) => {
    console.log(trek)
    const handleChange=(e)=>{

    }
return (
    <div className='booking'>
        <div className="booking--top" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <h3 style={{fontFamily:"geneva",color:"aliceblue",fontSize:"24px"}}>{trek.price}</h3>
            <span className='rate'>
                <span><i className="fa-solid fa-star"></i>4.6 (13)</span>
            </span> 
        </div>
        <div className='booking-form'>
            <h4>Register for Trek</h4>
            <form className='form--form'>
                <label>Full Name*</label><br/>
                <input required type='text' id='fullname' placeholder='Full Name' onChange={handleChange} autoComplete='off'/><br/>
                <label>E-mail*</label><br/>
                <input required type='email' id='email' placeholder='Email' onChange={handleChange}autoComplete='off'/><br/>
                <label>Phone*</label><br/>
                <input required type='number' id='phone' placeholder='Phone' onChange={handleChange} autoComplete='off'/><br/>
                <div className='form--date' style={{marginTop:".7rem"}}><br/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <label>Travel Date*</label><br/>
                    <input required placeholder='' type='date' id='book' onChange={handleChange} autoComplete='off'/><br/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"4rem"}}>
                    <label>People*</label><br/>
                    <input required placeholder='' type='number' id='group' onChange={handleChange} autoComplete='off' /><br/><br/>
                    </div>
                </div>
                <h2 style={{marginBottom:"1rem",borderBottom:"1px solid aliceblue",padding:"1rem 0rem 2rem 1rem",fontWeight:"200"}}><i class="fa-solid fa-heart" style={{color:"white", marginRight:"10px"}}></i> Save to wishlist</h2>
            </form>

        </div>
    </div>
)
}

export default Booking
