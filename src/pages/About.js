import React from 'react'
import BannerImage from "../img/1beef.jpg"


function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${BannerImage})`}}>
      
        </div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p>Best Hamburger Patty Recipe – Thick or thin, made on the grill or stovetop, this is the best and easiest all-purpose recipe for perfect hamburger patties every time! These juicy, delicious  hamburgers are ready in less than 30 minutes ..</p>
        </div>
    </div>
  )
}

export default About