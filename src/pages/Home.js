import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main';
import Destination from '../components/Destination';
import Foot from '../components/Foot'
import ExploreTreks from '../components/ExploreTreks';
import Sign from '../components/Sign';
import {motion} from 'framer-motion'
import Gallery from '../components/gallery';

const Home = () => {
return (
    <>
    <motion.div initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,ease:'easeOut'}}>
    <Navbar/>
    <Sign/>
    <Main/>
    <Destination/>
    <ExploreTreks/>
    <Gallery/>
    <Foot/>
    </motion.div>
</>
)
}

export default Home
