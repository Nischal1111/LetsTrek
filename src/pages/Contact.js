import React from 'react'
import Navbar from '../components/Navbar';
import Foot from '../components/Foot'
import ContactBody from '../components/ContactBody'
import Sign from '../components/Sign';
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,ease:"easeIn"}}>
    <Navbar/>
    <Sign/>
    <ContactBody/>

    <Foot/>
    </motion.div>
    </>
  )
}

export default Contact
