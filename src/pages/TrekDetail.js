import React,{useRef,useState} from 'react'
import "../Css/TrekDetail.css"

import avatar from "../assets/avatar.jpg"

import TrekData from '../Data/Trekdata'
import Booking from '../components/Booking'

import {useParams,Link} from "react-router-dom"



const TrekDetail = () => {
    const {id} = useParams();


    const RevMsgref=useRef("");


    const [tourRate, setTourRate]=useState(null)


    console.log(id)
    
    
    const submithandler=(e)=>{
        e.preventDefault();
        const revText=RevMsgref.current.value;
        alert(`${revText},${tourRate}`)
    }


    const trek = TrekData.find((item)=>{
        return item.id===parseInt(id)
    })


    console.log(trek)
    const format = {day:'numeric',month:"long",year:"numeric"}
    return (<>
        <section>
            <main className='left--div'>
            <div className="detail">
                <div className='detail--img--div'>
                    <img src={trek.imgSrc} className='detail--img'/>
                </div>
            <div className='detail--info'>
                        <h2 className='detail--title'>{trek.title}</h2>
                    <div className='detail--rating'>
                        <span className='rate'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span><i class="fa-solid fa-star-half-alt"></i>4.6 (13)</span>
                        </span> 
                        <span style={{marginLeft:"70px",fontSize:"22px",fontWeight:"200"}} className='detail--location'>
                            <i className="fa-solid fa-location-dot" style={{marginRight:"10px"}}></i>{trek.location}
                        </span>
                        <div className='detail--extra'>
                            <span className='price' style={{fontSize:"18px"}}>
                                <i className="fa-solid fa-dollar-sign " style={{marginRight:"10px"}}></i>{trek.price} / per person
                            </span>
                            <span style={{marginLeft:"40px",fontWeight:"200",}}>
                                <i className="fa-solid fa-user-group" style={{marginRight:"10px"}}></i>6-8 people per group
                            </span>
                        </div>
                        <h3 >Description</h3>
                        <p>{trek.desc}</p>
                    </div>
            </div>
            <div className='review'>
                <h4>Customer Reviews (5 Reviews)</h4>
                <form onSubmit={submithandler}>
                    <div className='rev--div'>
                        <span onClick={()=>setTourRate(1)}>
                            1 <i class="fa-solid fa-star"></i>
                        </span >
                        <span onClick={()=>setTourRate(2)}>
                            2 <i class="fa-solid fa-star"></i>
                        </span>
                        <span onClick={()=>setTourRate(3)}>
                            3 <i class="fa-solid fa-star"></i>
                        </span>
                        <span onClick={()=>setTourRate(4)}>
                            4 <i class="fa-solid fa-star"></i>
                        </span>
                        <span onClick={()=>setTourRate(5)}>
                            5 <i class="fa-solid fa-star"></i>
                        </span>
                    </div>
                    <div className="review--input">
                        <input type='text' placeholder='Share your thoughts' ref={RevMsgref} required/>
                        <button className="rev--btn" type='submit'>Submit</button>
                    </div>
                </form>
                <div className='rev--person'>
                    <div className='rev--item'>
                        <img src={avatar}/>
                        <div style={{width:"100%"}}>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                <div className='rev--name'>
                                    <h3 style={{fontWeight:"200",fontSize:"22px",color:" #314f73"}}>Nischal Dai</h3>
                                    <p style={{fontSize:"14px",color:"#0c386e"}}>{new Date("05-15-2023").toLocaleDateString("en-US", format)}</p>
                                </div>
                                <span style={{display:"flex",alignItems:"center"}}>
                                    5 <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                            <h5>Was a thrilling adventure !!!</h5>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </main>
            <main className='right-div'>
                
            </main>
        </section>
    </>)
}

export default TrekDetail
