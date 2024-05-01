import React from 'react'
import './Hero.css';
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div  id="home" className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Rahul Kumar,</span> Fullstack devloper based in INDIA.</h1>
      <p>2 years of experience in react and node</p>
      <div className="hero-action">
      <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    <div className="hero-resume">My resume</div>

      </div>
    </div>
  )
}

export default Hero
