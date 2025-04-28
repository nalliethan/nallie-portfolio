import React from 'react'
import './Hero.css'
import heroImg from '../../assets/hero_img.jpeg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h1>Hi, I am Nallie</h1>

        <p>Frontend Web Developer</p>
        <p>I'm currently shifting my career focus to frontend development, where I can channel my passion for creating beautiful, responsive websites and delivering great user experiences.</p>

        <div className="hero-btns">
          
            <button className='contact-btn'>
              <Link to='contact' smooth={true} duration={1000}>
              Contact Me
              </Link>
            </button>
          
          <a href='..\..\..\public\Nallie Than Zheng Yi_FrontendDeveloper.pdf'  download='Nallie Than Zheng Yi_FrontendDeveloper.pdf' className='download-btn'>Download My Resume</a>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>

      <div className='bg-blur'></div>
    </div>
  )
}

export default Hero
