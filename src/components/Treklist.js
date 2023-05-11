import React, { useContext } from 'react'

import {TrekContext} from "./TrekContext"

import SingleTrek from "./SingleTrek"

import {Link} from "react-router-dom"

const Treklist = () => {
    const {trekking} =useContext(TrekContext);
  return (
    <section className='ooo'>
        <div className="container">
            {trekking.map((singleTrek,index)=>{
                return(<>
                    <Link to={`/trek/${singleTrek.id}`} key={index}>
                    </Link>
                        <SingleTrek singleTrek={singleTrek}></SingleTrek>
                </>)
            })}
        </div>

    </section>
  )
}

export default Treklist
