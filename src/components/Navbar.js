import React, { useState } from 'react'
import '../Css/Navbar.css'
import {Menu} from './Menu';
import {Link} from 'react-router-dom';
import { useSignContext } from './Context'

// class Navbar extends Component{

// render(){
const Navbar=()=>{
    const [showButton,setButton]=useState(false)
    const handleClick=()=>{
        setButton(!showButton)
    }
    const {openSignup} = useSignContext();

    
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
            <button className="nav--button"onClick={openSignup}>Signup</button>
        </ul>
    </nav>
    </div>
    </>
)

}



export default Navbar
