import React from 'react'
import Navbar from '../components/Navbar';
import Foot from '../components/Foot'
import Sign from '../components/Sign';
import {motion} from 'framer-motion'
import Trekkingbody from '../components/trekkingbody';

const Service = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,ease:"easeIn"}}>
    <Navbar/>
    <Sign/>
    <Trekkingbody/>
    <Foot/>
    </motion.div>
    </>
  )
}

export default Service
