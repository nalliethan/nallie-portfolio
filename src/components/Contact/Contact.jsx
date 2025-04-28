import React from 'react'
import './Contact.css'
import { IoMail, IoLogoLinkedin, IoLogoWhatsapp} from "react-icons/io5";

const Contact = () => {
  return (
    <div className='contact'>
      <p>Contact Me</p>

      <div className="contact-socials">
        <a href="mailto:zhengyi.than@gmail.com">
          <IoMail /> zhengyi.than@gmail.com
        </a>

        <a href="https://www.linkedin.com/in/nallie-thanzhengyi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8Zgjso5KSZGjlvW%2FKPZq%2Fg%3D%3D" target='_blank'>
          <IoLogoLinkedin />Nallie Than
        </a>

        <a href="https://wa.me/60146938973" target='_blank'>
          <IoLogoWhatsapp /> 014-693 8973
        </a>
      </div>
    </div>
  )
}

export default Contact
