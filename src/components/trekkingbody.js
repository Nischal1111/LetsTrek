import React from 'react'
import '../Css/trekkingbody.css'
import Search from './Search'
import Treklist from './Treklist'

const Trekkingbody = () => {
  return (
    <div className='trekking'>
      <div className='trekimg'>
        <img src="https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
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
    <Treklist/>
    </div>
  )
}

export default Trekkingbody
