import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
    <h1>About me</h1>
    <img src={theme_pattern} alt="" />

      </div>
      <div className="about-sections">
        <div className="about-left">    
        <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hey there! 👋 I'm a self-motivated and hardworking coding enthusiast, nearing the end of my B.Tech journey at the University of Engineering and Management, Kolkata. 💻
I thrive on crafting seamless user experiences with front-end finesse and architecting robust back-end solutions. 🔥 Keeping pace with the latest tech trends is my second nature.</p>
                <p>Hey there! 👋 I'm a self-motivated and hardworking coding enthusiast, nearing the end of my B.Tech journey at the University of Engineering and Management, Kolkata. 💻

I thrive on crafting seamless user experiences with front-end finesse and architecting robust back-end solutions. 🔥 Keeping pace with the latest tech trends is my second nature.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr  style={{width:"50%"}}/> </div>
                <div className="about-skill"><p>JAVASCRIPT</p><hr  style={{width:"60%"}}/> </div>
                <div className="about-skill"><p>REACT JS</p><hr  style={{width:"70%"}}/> </div>
                <div className="about-skill"><p>NODE JS & CSS</p><hr  style={{width:"80%"}}/> </div>
                <div className="about-skill"><p>MONGODB</p><hr  style={{width:"60%"}}/> </div>
                <div className="about-skill"><p>JAVA & DSA</p><hr  style={{width:"50%"}}/> </div>
                <div className="about-skill"><p>GIT</p><hr  style={{width:"70%"}}/> </div>
            </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h1>1+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>50+</h1>
            <p>Project Completed</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h1>10+</h1>
            <p>Happy clients</p>
        </div>
      </div>
    </div>
  )
}

export default About
