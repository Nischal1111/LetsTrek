import React from 'react'
import "../Css/TrekDetail.css"

import Navbar from '../components/Navbar'
import Foot from '../components/Foot'

import TrekData from '../Data/Trekdata'

import {useParams,Link} from "react-router-dom"



const TrekDetail = () => {
    const {id} = useParams();
    console.log(id)
    const trek = TrekData.find((item)=>{
        return item.id===parseInt(id)
    })
    console.log(trek)
    return (<>
        <section>
            <div className="detail">
                <div className='detail--text'>
                    <div>
                        <h2>{trek.title}</h2>
                        <h3>A thrilling adventure</h3>
                    </div>
                    <div className='lc--d'>
                        <div className='lc--d--lc'>{trek.location}</div>
                        <div className='lc--d--d'>{trek.days}</div>
                    </div>
                    <div className='detail--price'>{trek.price}</div>
                </div>
                <div className='detail--img--main'>
                    <div >
                        <div className='detail--img--div'>
                            <img src={trek.imgSrc} className='detail--img'/>
                        </div>
                    </div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default TrekDetail
