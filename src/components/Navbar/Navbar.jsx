import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [darkNav, setDarkNav] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY >= 50? setDarkNav(true): setDarkNav(false);
    })
  },[])

  return (
    <nav className={`${darkNav?"dark-nav":""}`}>
      <Link to='hero' smooth={true} duration={400}>
        <p>Nallie Than | Portfolio</p>
      </Link>

      <ul>
        <Link to='about' smooth={true} duration={1000} offset={-40}>
          <li>About</li>
        </Link>
        <Link to='skills' smooth={true} duration={1000} offset={-40}>
          <li>Skills</li>
        </Link>
        <Link to='projects' smooth={true} duration={1000} offset={-40}>
          <li>Projects</li>
        </Link>
        <Link to='contact' smooth={true} duration={1000}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
