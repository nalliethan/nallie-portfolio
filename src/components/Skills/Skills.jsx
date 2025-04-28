import React from 'react'
import './Skills.css'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: FaHtml5,
      title: "HTML",
    },
    {
      icon: FaCss3Alt,
      title: "CSS",
    },
    {
      icon: IoLogoJavascript,
      title: "JavaScript",
    },
    {
      icon: FaReact,
      title: "React",
    },
    {
      icon: RiTailwindCssFill,
      title: "Tailwind CSS",
    },
    {
      icon: SiMysql,
      title: "MySQL",
    },
    {
      icon: FaGitAlt,
      title: "Git GUI"
    },
    {
      icon: BiLogoVisualStudio,
      title: "Visual Studio"
    },
  ]

  return (
    <div className='skills'>
      <h2>Skills</h2>

      <div className="skills-grid">
        {
          skills.map((skill,idx) => {
            return <div key={idx} className='skill-card'>
              <skill.icon className='skill-icon'/>
              <p>{skill.title}</p>
            </div>
          })
        }
      </div>

      <div className="bg-blur"></div>
      <div className="bg-blur-bottom"></div>
    </div>
  )
}

export default Skills
