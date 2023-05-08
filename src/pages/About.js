import React,{useEffect} from 'react'
import Navbar from '../components/Navbar';
import '../Css/about.css'
import Foot from '../components/Foot'
import Aboutdata from '../Data/Aboutdata';
import Sign from '../components/Sign';
import {motion,useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const About = () => {
    
    const {ref, inView}=useInView({threshold:0.3});
    const animation2 = useAnimation()
    useEffect(()=>{
        if(inView){
            animation2.start({
                x:0,
                transition:{
                    type:"spring",
                    duration:1,
                    bounce:.3,
                    

                }
            })
        }
        if(!inView){
            animation2.start({
                x:"100vw",
                

            })
        }
    },[inView])

return (
    <>
    <motion.div className="about--main"initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.8,ease:"easeIn"}}>
    <Navbar/>
    <Sign/>
    <img  id="d" src='https://images.unsplash.com/photo-1533005346585-b131e79eef3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'></img>
    <div className='About'>
    <h1>Know about us</h1>
    <p>We are always here for you</p>
    </div>
    <div ref={ref} >
    <motion.div  animate={animation2}>
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
    </motion.div>
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
    <Foot/>
    </motion.div>
    </>
)
}


export default About
