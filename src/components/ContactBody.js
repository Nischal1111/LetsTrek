import React from 'react'
import '../Css/contactbody.css'
import {BsFillPinMapFill} from 'react-icons/bs'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillWechat} from 'react-icons/ai'
import {FiMail} from 'react-icons/fi'

const ContactBody = () => {
return (<>
    <img className='Contactimg' src='https://images.pexels.com/photos/15421709/pexels-photo-15421709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
    <div className='contacthead'>
    <h1>Feel free to contact us</h1>
    <p>We are here to provide you the best service</p>
    </div>
    <div className='contact--body'>
        <h4>Contact LetsTrek</h4>
        <p>
            You can contact us (LetsTrek) from this page. LetsTrek provides Trekking Packages. Every Tourist needs the contact info of the Tourism site to book the Tourism Packages So every Tourism site should provide it in the description or on the site. We also have mentioned its contact details on its Site. Happyland Treks is the best Trekking Agency in Nepal & provides Trekking, 
            Hiking, and Adventures Packages for Tourists. LetsTrek provides luxury trekking in Nepal.  
        </p>
    </div>
    <h2 className='con--location'><BsFillPinMapFill className='map'/>Check our Location</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.8682697438497!2d85.32603488371932!3d27.743594383739513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c81d35630f%3A0x90471f801fa6e175!2sRam%20Mandir%20Dhapasi!5e0!3m2!1sen!2snp!4v1682912297844!5m2!1sen!2snp" width="98%" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className='contactus'>
        <h2>Contact Us Now</h2>
        <div className='contact--methods'>
            <div>
                <BsFillTelephoneFill className='contacticons'/>
                <h3 className='contact--title'>Call Us 24/7</h3>
                <p className='methods--desc'>You can reach us on the office number or our mobiles. We are also on Viber 
                    and WhatsApp for your convenience.</p>
                <p className='methods2--desc'>
                    Tel: +977-1 4700040<br/>
                    WhatsApp / Call : +977-984-941-7757<br/>
                    Viber : +977-981-868-4494
                </p>
            </div>
            <div>
                <AiFillWechat className='contacticons'/>
                <h3 className='contact--title'>Office</h3>
                <p className='methods--desc'>Our office staff will be pleased to see you face to face at our Kathmandu o
                    ffice and answer any queries you may have.</p>
                <p className='methods2--desc'>
                    LetsTrek Pvt. Ltd.<br/>
                    Basundhara, Kathmandu<br/>
                    44600, Nepal
                </p>
            </div>
            <div>
                <FiMail className='contacticons'/>
                <h3 className='contact--title'>E-mail</h3>
                <p className='methods--desc'>Emailing with your query might be an easiest option for you. We are very prompt 
                    and will answer your query within 24 hours.</p>
                <p className='methods2--desc'>
                    info@letstrek.com<br/>
                    letstrek@gmail.com<br/>
                </p>
            </div>
        </div>
    </div>
    <div className='contact--container'>
        <h3>Send us Message</h3>
        <div className='contact--form'>
            <form action='https://formspree.io/f/meqwnega' method='POST'>
                <input className='contact--input' placeholder='Enter your Username' name='username' type='text' autoComplete='off' required/>
                <input className='contact--input' placeholder='Enter your E-mail' name='Email' type='email' autoComplete='off' required/>
                <textarea name='message' placeholder='Enter your message' cols='30'rows='6' autoComplete='off' required></textarea>
            <input type='submit' value='Send' className='contact--btn'></input>
            </form>
        </div>
    </div>
    <div className='plan'>
    <img className='img2'src='https://images.pexels.com/photos/3599174/pexels-photo-3599174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
    <div className='startplan'>
            <h2>Hike your own hike</h2>
            <button  className='plan--button'><a href='/trekkings'>Start Hiking</a></button>
    </div>
</div>
</>
    
)
}

export default ContactBody
