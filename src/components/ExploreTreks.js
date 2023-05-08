import React, { useState,useRef,useEffect } from 'react'
import '../Css/Explore.css'
import PlaceData from './PlaceData'
import {GrLinkNext,GrLinkPrevious} from "react-icons/gr";

const ExploreTreks = () => {
    const [card,setCard]=useState(0);
    const ref= useRef()
    const cardref=useRef()
    const onClick=(type)=>{
        let width=cardref.current.clientWidth;
        if(type==='prev'){
            ref.current.style.transform=`translateX(${width+card+60}px)`
            setCard(card+width+60)
        }
        if(type==='next'){
            ref.current.style.transform=`translateX(${card-width-60}px)`
            setCard(card-width-60)
        }
    }
return (
    <>
    <div className='explorehead'  >
        <h1><i className="fa-solid fa-magnifying-glass"></i>Explore Treks</h1>
    </div>
    <div className='exploreslider'>
        <div className='btn-container'>
        <button className='prev' onClick={()=>{onClick('prev')}} disabled={card>=0}><GrLinkPrevious/></button> 
        <button  className='next' onClick={()=>{onClick('next')}} disabled={card<=-1300}><GrLinkNext/></button>
        </div>
    <div className='innerslider' ref={ref}>
    {PlaceData.map((place)=>{
        const {id,title,price,days,location,imgSrc,desc}=place;
        return(<>

            <div className="place" key={id} ref={cardref} >
                    <img src={imgSrc} alt='Trek images'></img>
                    <h3>{title}</h3>
                    <div className='pl'>
                        <div className='location'><i className="fa-solid fa-map-pin"></i>{location}</div>
                        <p>{price}</p>
                    </div>
                    <p className='desc'>{desc}</p>
                    <p className='time'><i className="fa-solid fa-clock"></i>{days}</p>
            </div>
            
            
        </>)
        
    })}
    <div className='exploremore'>
                <button><a href='/trekkings'>Explore More</a></button>
            </div>
            </div>
    </div>
    </>
)
}

export default ExploreTreks
