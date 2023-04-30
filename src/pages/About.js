import React from 'react'
import Navbar from '../components/Navbar';
import './about.css'
import Foot from '../components/Foot'
import Aboutdata from './Aboutdata';
const About = () => {
return (
    <>
    <Navbar/>
    <img  id="d" src='https://images.pexels.com/photos/3027138/pexels-photo-3027138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
    <div className='About'>
    <h1>Know about us</h1>
    <p>We are always here for you</p>
    </div>
    <div className='abouttext'>
        <h1>ABOUT<br></br>LetsTrek</h1>
        <p className='text'>Given the fact that the tourism industry is one of the biggest industries in Nepal. There are many travels 
            available for you to choose from. Among all of them, LetsTrek provides you with varieties of trekking 
            and travel packages. And LetsTrek Specializes in Nepal Trekking, Hiking, Walking tours, Group travel & 
            treks,  Private trip, solo travel, education tour, Tailor-made trips with Hand-Picked Mountain guides, and 
            many more outdoor adventures guide services, and we have an experience where your adventure happens. Our 
            Adventure Experts and guides true explore with experience in the Himalayas Mountains of Nepal. Our office is 
            located in Thamel, Kathmandu Nepal, South Asia. And we also do Tibet and Bhutan tours as well. Meet our 
            adventure team. Read our TripAdvisor Reviews and Google Reviews.</p>
    </div>
    <div className='feature'>
        {Aboutdata.map((about)=>{
            const {id,icon,text,title}=about;
            return(<>
            <div className='single' key={id}>
                <i className={icon}></i>
                <h3>{title}</h3>
                <p>{text}
                </p>
            </div>
            </>

            )
        })}
    </div>
    <div className='adv'>
        <h3>Adventure <br></br>Specialists</h3>
        <img src='https://images.unsplash.com/photo-1501535033-a594139be346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
        <p></p>
        <img src='https://images.unsplash.com/photo-1586022045315-1cdd6493045c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
    </div>
    <Foot/>
    </>
)
}


export default About
