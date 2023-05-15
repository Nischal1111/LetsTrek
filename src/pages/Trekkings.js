import React from 'react'
import Sign from '../components/Sign';
import {motion} from 'framer-motion'
import Trekkingbody from '../components/trekkingbody';

const Service = () => {
  return (
    <>
    <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,ease:"easeIn"}}>
    <Sign/>
    <Trekkingbody/>
    </motion.div>
    </>
  )
}

export default Service
