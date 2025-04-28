import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpeg'

const About = () => {
  return (
    <div className='about'>
      <h2>About Me</h2>

      <div className="about-content">
        <img src={about_img} alt="" />
        <div className="about-text">
          <p>
          I'm a Software Engineer with three years of experience developing user interfaces and machine logic for automation systems. My journey began with C and C#, where I focused on creating intuitive user experiences and designing time-critical machine motion sequences.
          </p>
          
          <p>
          I'm actively transitioning into a Frontend Developer role, building on my engineering background to create responsive, user-friendly web interfaces using React, JavaScript, and modern web technologies. I'm passionate about crafting engaging digital experiences and continuously expanding my skills to stay at the forefront of frontend development.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
