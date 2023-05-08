import React from 'react'
import '../Css/trekkingbody.css'
import trekimg from "../assets/trek.jpeg"
import Search from './Search'

const Trekkingbody = () => {
  return (
    <div className='trekking'>
      <div className='trekimg'>
        <img src={trekimg}></img>
      </div>
      <div className='trektext'>
        <h1>Trekking &<br></br>Activites</h1>
        <p className='text'>Discover the authentic adventure of Nepal and the Himalayas with Happyland Treks, one of the best 
              trekking agency in Nepal. We offer a variety of treks at a competitive and affordable price. Our local knowledge 
              and years of experience will ensure that your trek will be as spectacular as possible, leaving you wanting to explore 
              more of these magnificent mountains. Thus, being one of the best trekking agency in Nepal, we strive to provide the best.Our 
            Adventure Experts and guides true explore with experience in the Himalayas Mountains of Nepal. Our office is 
            located in Thamel, Kathmandu Nepal, South Asia. And we also do Tibet and Bhutan tours as well. Meet our 
            adventure team. Read our TripAdvisor Reviews and Google Reviews.</p>
    </div>
    <Search/>
    </div>
  )
}

export default Trekkingbody
