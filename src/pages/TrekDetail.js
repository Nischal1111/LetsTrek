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
        <Navbar/>
        <section>
            <div className="detail">
                
            </div>
        </section>
        <Foot/>
    </>)
}

export default TrekDetail
