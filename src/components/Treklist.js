import React, { useContext } from 'react'

import {TrekContext} from "./TrekContext"

import SingleTrek from "./SingleTrek"

import {Link} from "react-router-dom"
import {ImSpinner2} from "react-icons/im"

const Treklist = () => {
    const {trekking,loading} =useContext(TrekContext);

    if(loading){
        return <ImSpinner2 className='loading'/>
    }
return (
    <section className='ooo'>
        <div className="container">
            {trekking.map((singleTrek,index)=>{
                return(<>
                    <div key={index} className='no-line'>
                        <SingleTrek singleTrek={singleTrek}></SingleTrek>
                    </div>
                </>)
            })}
        </div>

    </section>
  )
}

export default Treklist
