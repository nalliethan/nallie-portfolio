import React from 'react'
import './Projects.css'
import project1 from '../../assets/Stopwatch.jpeg'
import project2 from '../../assets/To-do.jpeg'
import project3 from '../../assets/Calculator.jpeg'
import project4 from '../../assets/Calendar.jpeg'
import project5 from '../../assets/To-do-React.jpeg'
import project6 from '../../assets/Weather-app.jpeg'
import project7 from '../../assets/Expense-tracker.jpeg'
import website1 from '../../assets/Website-1.jpeg'
import website1_mobile from '../../assets/Website-1-mobile.jpeg'
import website2 from '../../assets/Website-2.jpeg'
import website2_mobile from '../../assets/Website-2-mobile.jpeg'

import website_1 from '../../assets/website-1.mp4'
import website_2 from '../../assets/website-2.mp4'
import website_1_mobile from '../../assets/website-1-mobile.mp4'
import website_2_mobile from '../../assets/website-2-mobile.mp4'

const Projects = () => {
  const miniProjects = [
    {
      img: project1,
      title: "Stopwatch",
      description: "This stopwatch project features a sleek gradient UI with Start, Stop, and Reset buttons, allowing users to measure elapsed time down to hundredths of a second.",
      languages: ["HTML", "CSS", "JavaScript"],

      liveUrl: "https://nalliethan.github.io/Stopwatch/",
      sourceUrl: "https://github.com/nalliethan/Stopwatch"
    },
    {
      img: project2,
      title: "To-Do List",
      description: "This to-do list app allows users to add tasks, check off completed tasks, and delete tasks.",
      languages: ["HTML", "CSS", "JavaScript"],

      liveUrl: "https://nalliethan.github.io/To-Do-JS/",
      sourceUrl: "https://github.com/nalliethan/To-Do-JS"
    },
    {
      img: project3,
      title: "Calculator",
      description: "This calculator app allows users to perform basic arithmetic operations, clear all input, delete the last digit, and handle decimal calculations.",
      languages: ["HTML", "CSS", "JavaScript"],

      liveUrl: "https://nalliethan.github.io/My-calculator/",
      sourceUrl: "https://github.com/nalliethan/My-calculator"
    },
    {
      img: project4,
      title: "Calendar",
      description: "This calendar app displays a full monthly view, includes a small section showing today's date and day of the week, and features a dark theme toggle button for user customization.",
      languages: ["HTML", "CSS", "JavaScript"],

      liveUrl: "https://nalliethan.github.io/myCalendar/",
      sourceUrl: "https://github.com/nalliethan/myCalendar"
    },
    {
      img: project5,
      title: "To-do List",
      description: "This to-do list app, built with React, allows users to add new tasks, mark tasks as completed, and delete tasks with a simple and interactive interface.",
      languages: ["React", "Tailwind CSS"],

      liveUrl: "https://nalliethan.github.io/To-Do-React/",
      sourceUrl: "https://github.com/nalliethan/To-Do-React"
    },
    {
      img: project6,
      title: "Weather App",
      description: "This weather app is built with React and uses the OpenWeather API to fetch and display real-time weather information based on the searched city.",
      languages: ["React", "Tailwind CSS"],

      liveUrl: "https://nalliethan.github.io/My-weather-app/",
      sourceUrl: "https://github.com/nalliethan/My-weather-app"
    },
    {
      img: project7,
      title: "Expense Tracker App",
      description: "Built an expense tracker app using React, Context API, and useReducer to manage global state, allowing users to track income, expenses, and transaction history in real-time.",
      languages: ["React", "CSS"],

      liveUrl: "https://nalliethan.github.io/Expense-tracker/",
      sourceUrl: "https://github.com/nalliethan/Expense-tracker"
    },
  ]


  const websites = [
    {
      img: website1,
      video: website_1,
      img_mobile: website1_mobile,
      video_mobile: website_1_mobile,
      
      title: "Forever Home Paws",
      description: "Forever Home Paws is a pet adoption website designed to help connect loving animals with their forever families. The site features an adoption pet list, an easy-to-use application form, pet care guides, heartwarming success stories, and a contact page. Built with React Router DOM for smooth navigation and react-scroll for seamless user experience, it also incorporates W3 forms for reliable form handling.",
      languages: ["React", "CSS"],

      liveUrl: "https://nalliethan.github.io/Forever-Home-Paws/",
      sourceUrl: "https://github.com/nalliethan/Forever-Home-Paws"
    },
    {
      img: website2,
      video: website_2,
      img_mobile: website2_mobile,
      video_mobile: website_2_mobile,
      
      title: "Popo Satay Seremban",
      description: "Popo Satay Seremban is a responsive website created for a local small business in Seremban, Malaysia. The site highlights the business's menu and services, and includes an interactive map and contact section that links directly to Google Maps and WhatsApp for easy navigation and communication. ",
      languages: ["React", "CSS"],

      liveUrl: "https://nalliethan.github.io/popo-satay-seremban/",
      sourceUrl: "https://github.com/nalliethan/popo-satay-seremban"
    },
  ]


  return (
    <div className='projects'>
      <h2>Projects</h2>

      <h3>Mini Projects</h3>

      {miniProjects.map((item, idx) => {
        return <div className='project-card' key={idx}>
        <div className='project-image'>
          <img src={item.img} alt="" />
        </div>
        <div className="project-info">
          <p className='info-title'>{item.title}</p>
          <p className='info-desc'>{item.description}</p>
          <div className='info-lang'>
            {item.languages.map((lang,idx) => {
              return <p key={idx}>{lang}</p>
            })}
          </div>

          <div className="project-btns">
            <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="live-btn">
              Live Demo
            </a>
            <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-btn">
              Source Code
            </a>
          </div>
        </div>
      </div>
      })}


      <h3>Websites</h3>

      {websites.map((item,idx) => {
        return <div className="web-card" key={idx}>
          <div className="web-display">
            <div className="web-preview">
              <img src={item.img} alt="Website preview" className="web-img" />
              <video className="web-video" autoPlay muted loop preload="metadata">
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="web-preview-mobile">
              <img src={item.img_mobile} alt="" />
              <video className="web-video-mobile" autoPlay muted loop preload="metadata">
                <source src={item.video_mobile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="web-info">
            <p className='web-info-title'>{item.title}</p>

            <p className='web-info-desc'>{item.description}</p>

            <div className='web-info-lang'>
              {item.languages.map((lang,idx) => {
                return <p key={idx}>{lang}</p>
              })}
            </div>

            <div className="project-btns">
              <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="live-btn">
                Live Demo
              </a>
              <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-btn">
                Source Code
              </a>
            </div>
          </div>
        </div>
      })}
      

     
    </div>
  )
}

export default Projects
