import React from 'react'
import BannerImage from '../img/2blackbean.jpg'

function Contact() {
  return (
    <div className='contact'>
       <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form id='contact-form'>
            <label htmel='name'>Full Name</label>
            <input nsme='name' placeholder='Enter Full Name...' type='text'/>
            <label htmel='email'>e-amil</label>
            <input nsme='mail' placeholder='Enter Full email...' type='email'/>
            <label htmel='message'>Full Name</label>
            <textarea nsme='message' placeholder='Enter your nassege...'></textarea>
            <button type='submit'>Sand Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
