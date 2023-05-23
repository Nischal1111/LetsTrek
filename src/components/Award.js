import React from 'react'
import "../Css/award.css"
import {AiOutlineTrophy,AiOutlineHeart} from "react-icons/ai"
import {BsLightbulb} from "react-icons/bs"
import {HiOutlineSparkles} from "react-icons/hi"


const Award = () => {
return (<>
    <section className="award">
            <h1 style={{fontSize:"38px",fontWeight:"200",letterSpacing:"2px",marginBottom:"1rem",marginTop:"1.5rem"}}>
                Over 1,00,000+ Happy Trekkers with our services.
            </h1>
            <p style={{fontWeight:"200",fontSize:"28px",letterSpacing:"2px",color:"grey"}}>Choose us without any hesitation.</p>
        <div className="award--container">
            <div className='award--box'>
            <AiOutlineTrophy className='award--icon'/>
            <p >25K+</p>
            <h4 >Blue Burmin Award</h4>
            </div>
            <div className='award--box'>
            <HiOutlineSparkles className='award--icon'/>
            <p >21K+</p>
            <h4 >Trip Advisor Award</h4>
            </div>
            <div className='award--box'>
            <AiOutlineHeart className='award--icon'/>
            <p >45K+</p>
            <h4 >Fan Favourite Award</h4>
            </div>
            <div className='award--box'>
            <BsLightbulb className='award--icon'/>
            <p >15K+</p>
            <h4 >Australian UGC Award</h4>
            </div>
        </div>
    </section>
</>)
}

export default Award
