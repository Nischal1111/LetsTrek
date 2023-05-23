import React,{useState} from 'react'
import "../Css/Booking.css"
import { useNavigate } from 'react-router-dom'


const Booking = ({trek}) => {
    const [user,setUser]=useState({
        userId:"1",
        userEmail:"example",
        fullName:"",
        phone:"",
        email:"",
        group:1,
        book:""
    })
    const navigate=useNavigate()
    const serviceFee = 10;
    const total = Number(serviceFee)+ Number(user.group)* Number(trek.price)

    const handleChange=(e)=>{
        setUser(prev=>({... prev, [e.target.id]:e.target.value}))
    }

    const handleClick=(e)=>{
        e.preventDefault()
        if(notValid()){
            
            alert("Please fill out the form completely.")

        }else{
            navigate("/thank-you")
        }
    }
    const notValid=()=>{
        const { fullName, phone, email, book } = user;
    return fullName== '' && phone== '' && email== '' && book== '';
    }
return (
    <div className='booking'>
        <div className="booking--top" style={{display:"flex", alignItems:"center", justifyContent:"space-between",marginTop:".7rem"}}>
            <h3 style={{fontFamily:"geneva",color:"aliceblue",fontSize:"24px"}}>$ {trek.price}</h3>
            <span className='rate'>
                <span><i className="fa-solid fa-star"></i>4.6 (13)</span>
            </span> 
        </div>
        <div className='booking-form'>
            <h4>Register for Trek</h4>
            <form className='form--form' onSubmit={handleClick}>
                <label>Full Name</label><br/>
                <input required type='text' id='fullname' placeholder='Full Name' onChange={handleChange} autoComplete='off'/><br/>
                <label>E-mail</label><br/>
                <input required type='email' id='email' placeholder='Email' onChange={handleChange}autoComplete='off'/><br/>
                <label>Phone</label><br/>
                <input required type='text' id='phone' placeholder='Phone' onChange={handleChange} autoComplete='off'/><br/>
                <div className='form--date' style={{marginTop:".7rem"}}><br/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <label>Travel Date</label><br/>
                    <input required placeholder='' type='date' id='book' onChange={handleChange} autoComplete='off'/><br/>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginLeft:"4rem"}}>
                    <label>People</label><br/>
                    <input required placeholder='' type='number' id='group' onChange={handleChange} autoComplete='off' /><br/><br/>
                    </div>
                </div>  
        <div className="booking-bottom">
            <div className='head' style={{display:"flex",alignItems:"center" ,gap:"1", justifyContent:"space-between"}}>
                <h5 style={{color:"var(--main--color)",fontWeight:"200",fontSize:"1rem",display:"flex",marginBottom:".7rem", fontFamily:"Geneva"}}>$ {trek.price}<i class="fa-solid fa-xmark" style={{marginRight:"15px",marginLeft:"15px", fontSize:"20px"}}></i>per person</h5>
                <span style={{fontFamily:"Geneva",color:"Pink",marginRight:"1rem"}}>$ {trek.price}</span>
            </div>
            <div className='mid' style={{display:"flex",alignItems:"center" ,gap:"1",justifyContent:"space-between"}}>
                <h5 style={{color:"var(--main--color)",fontWeight:"200",fontSize:"1.2rem",display:"flex",marginBottom:".7rem"}}>Service Charge</h5>
                <span style={{fontFamily:"Geneva",color:"Pink",marginRight:"1rem"}}>$ {serviceFee}</span>
            </div>
            <div className='bottom' style={{paddingTop: "10px"}}>
                <h5 style={{color:"var(--main--color)",fontWeight:"700",fontSize:"1.6rem",display:"flex",marginBottom:".7rem"}}>Total</h5>
                <span style={{fontWeight:"700",fontFamily:"Geneva",color:"Pink",marginRight:"1rem",fontSize:"1.4rem"}}>$ {total}</span>
            </div>
            <button type='submit' onClick={handleClick}>Register Now</button>
        </div>
            </form>
        </div>
    </div>
)
}

export default Booking
