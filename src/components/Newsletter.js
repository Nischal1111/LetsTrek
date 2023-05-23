import React from 'react'
import "../Css/news.css"

const Newsletter = () => {
  return (
    <div className='news'>
        <div>
            <h1>
                Do you need any help ?
            </h1>
             <p> Contact us right away</p>  
        </div>
        <button className='news--button'><a href='/contact'>Contact Us</a></button>
      
    </div>
  )
}

export default Newsletter
