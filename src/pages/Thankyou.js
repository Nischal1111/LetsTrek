import React from 'react'
import {Link} from "react-router-dom"
import "../Css/thank.css"
import {AiOutlineCheckCircle} from "react-icons/ai"

const Thankyou = () => {
return (
    <div className='thank'>
        <span><AiOutlineCheckCircle className="icon"/></span>
        <h1>Thank you</h1>
        <p className='p1'>Your Trek has been booked.</p>
        <p className='p2'>We will reach you shortly.</p>
        <button>
            <Link to="/" style={{textDecoration:"none",color:"white"}}>Back to Home</Link>
        </button>
    </div>
)
}

export default Thankyou
