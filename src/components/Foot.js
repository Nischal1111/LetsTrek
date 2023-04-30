import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>LetsTrek</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href='#'><i className='fa-brands fa-facebook-square'></i></a>
          <a href='#'><i className='fa-brands fa-tiktok'></i></a>
          <a href='#'><i className='fa-brands fa-instagram-square'></i></a>
          <a href='#'><i className='fa-brands fa-twitter-square'></i></a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Projects</h4>
          <a href='/'>ChangeLog</a>
          <a href='/'>Status</a>
          <a href='/'>All Versions</a>
          <a href='/'>License</a>
        </div>
        <div>
          <h4>Contacts Info</h4>
          <a href='/'>+977 9876543210</a>
          <a href='/'>+977 9818272458</a>
          <a href='/'>neupanenischal2@gmail.com</a>
          <a href='/'>Basundhara, KTM</a>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href='/'>Home</a>
          <a href='/about'>About</a>
          <a href='/contact'>Contacts</a>
          <a href='/trekkings'>Trekkings</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href='/'>Issues</a>
          <a href='/'>Troubleshooting</a>
          <a href='/'>Proud Company</a>
          <a href='/'>Customer Services</a>
        </div>
        </div>
    </div>
  )
}

export default footer
