import React from 'react'
import './Destination.css'
import Mardi1 from '../assets/MardiImg1.jpeg'
import Mardi2 from '../assets/MardiImg2.jpeg'
import Tilicho1 from '../assets/tilicho1.jpeg'
import Tilicho2 from '../assets/tilicho2.jpeg'
import Destinationdata from './Destinationdata'
const Destination = () => {
return (<>
        <div className='destination'>
        <h1> <i className="fa-solid fa-location-dot"></i>Popular Treks</h1>
        <p>Trek with us to all these fun places</p>
        <Destinationdata  className='dest-first' head='KHUMAI DADA TREK'
        text='Khumai Dada is located on the North side of Pokhara and elevates at an altitude of 3245m. The Hill lies on 
        the base of the south face of Macchapuchre, which is also a part of the Macchapuchre Model Trek. The Khumai Danda 
        trek can be completed in 3-4 days from Pokhara and can also be extended up to a week by adding the Mardi Himal 
        trek to the itinerary. Since it is located at the base of Macchapuchre, the views of the Himalayas and sunrise 
        from the vantage point, Korchan (3700m) are astonishing. Apart from this, the peaceful trekking trail, 
        unadulterated scenery, lush woodlands and ethnic villages like Saripakha, Hile Kharka, and Mirsha Village make 
        Khumai Danda one of the magical trekking destination for anyone looking for solitude and a wonderful time amidst 
        the nature.'
        img1={Mardi1}
        img2={Mardi2}
        />
        <Destinationdata className='dest-first-reverse' head='Tilicho lake Trek'
        text='Tilicho Lake trek is a journey to the world’s highest glacial lake Tilicho with an altitude of 4949 meters. 
        Tlicho lake is part of Annapurna circuit trek and one of the best sight treks. Often trekkers do it when they are 
        doing Annapurna circuit trek and most of the trekkers cross Thorong la pass after they do the Tilicho lake trek. 
        The magnificent lake is one of the major attractions in the Annapurna region. Lake Tilicho is surrounded by the 
        High Himalayas and the highest one is the Tilicho peak 7,134 Meters. The 19 days trek takes you to explore the 
        things that you have never explored before. With the spectacular landscapes and high mountains, the Tilicho lake 
        hike is the best activity that you should do when you trek to the Annapurna circuit trek. Trekking to Tilicho 
        lake is quite harder because of the frequent stone falling from the mountains.'
        img1={Tilicho1}
        img2={Tilicho2}
        />
        </div>
    </>
)
}

export default Destination
