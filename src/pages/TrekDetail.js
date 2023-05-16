import React from 'react'
import "../Css/TrekDetail.css"

import avatar from "../assets/avatar.jpg"

import TrekData from '../Data/Trekdata'

import {useParams,Link} from "react-router-dom"



const TrekDetail = () => {
    const {id} = useParams();
    console.log(id)
    const trek = TrekData.find((item)=>{
        return item.id===parseInt(id)
    })
    console.log(trek)
    const format = {day:'numeric',month:"long",year:"numeric"}
    return (<>
        <section>
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
                            <span className='price'>
                                <i className="fa-solid fa-dollar-sign " style={{marginRight:"10px"}}></i>{trek.price} / per person
                            </span>
                            <span style={{marginLeft:"70px",fontWeight:"200",}}>
                                <i className="fa-solid fa-user-group" style={{marginRight:"10px"}}></i>6-8 people per group
                            </span>
                        </div>
                        <h3 >Description</h3>
                        <p>{trek.desc}</p>
                    </div>
            </div>
            </div>
            <div className='review'>
                <h4>Customer Reviews (5 Reviews)</h4>
                <form>
                    <div className='rev--div'>
                        <span>
                            1 <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                            2 <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                            3 <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                            4 <i class="fa-solid fa-star"></i>
                        </span>
                        <span>
                            5 <i class="fa-solid fa-star-half-alt"></i>
                        </span>
                    </div>
                    <div className="review--input">
                        <input type='text' placeholder='share your thoughts'/>
                        <button className="rev--btn" type='submit'>Submit</button>
                    </div>
                </form>
                <div className='rev--person'>
                    <div className='rev--item'>
                        <img src={avatar}/>
                        <div style={{width:"100%"}}>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                <div>
                                    <h3 style={{fontWeight:"200",fontSize:"22px",color:" #314f73"}}>Nischal Dai</h3>
                                    <p>{new Date("05-15-2023").toLocaleDateString("en-US", format)}</p>
                                </div>
                                <span style={{display:"flex",alignItems:"center"}}>
                                    5 <i class="fa-solid fa-star"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default TrekDetail
