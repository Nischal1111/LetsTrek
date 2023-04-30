import React, { useState } from 'react'
import {Component} from 'react';
import './Navbar.css'
import {Menu} from './Menu';
import {Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

// class Navbar extends Component{

// render(){
function Navbar(){
    const [showButton,setButton]=useState(false)
    const handleClick=()=>{
        setButton(!showButton)
    }
    const { loginWithRedirect,isAuthenticated,logout,user } = useAuth0();
    
return (<>
    <div className='nav'>
    <nav className='navbaritem'>
        <h1 className='navlogo'><i className="fa-solid fa-mountain-sun logo"></i>LetsTrek</h1>
        <div className='menuicons'>
            <i className={showButton ? 'fas fa-times': 'fas fa-bars'} onClick={handleClick}></i>
            
        </div>
        <ul className={showButton ? 'navmenu active': 'navmenu'}>
            {Menu.map((item,index)=>{
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                )})}
            <button>Signup</button>
            <button>Login</button>
        </ul>
    </nav>
    </div>
    </>
)

}



export default Navbar
