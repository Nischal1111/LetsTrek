import React from 'react'
import {FaTimes} from "react-icons/fa"
import "../Css/sign.css"
import { useSignContext } from './Context'

const Sign = () => {
  const {isSignupOpen,closeSignup} = useSignContext();
  return (
    <div className={`${isSignupOpen ? "signup-overlay show-signup":"signup-overlay"} `}>
      <div className="signup-container">
        
          
            <div className="col-1">
              <h2>Sign In</h2>
              <span>Join us for services</span>
              <form id='form' className='flex flex-col'>
                <input type='text' placeholder='Username'></input>
                <input type='text' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                <input type='password' placeholder='Confirm Password'></input>
                <button className='btn'>Sign In</button>
              </form>
            </div>
            <div className="col-2">
              <img src='https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2630&q=80'
              alt='Image'/>
            </div>
          
      
        <button className='close-signup-btn' onClick={closeSignup}><FaTimes className='close--button'/></button>
      </div>
    </div>
  )
}

export default Sign
