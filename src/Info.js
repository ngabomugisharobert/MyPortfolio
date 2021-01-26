import React from 'react'
import './Info.css'
import {FaLinkedin, FaGithub, FaWhatsapp} from 'react-icons/fa'
function Info() {
    return (
        <>
        <div className="info">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:ngabo.mugisha.bro@gmail.com</p>
           
        </div><a href="https://www.linkedin.com/in/ngabo-mugisha-robert-877a72122/" target="_blank" rel="noreferrer">
        <FaLinkedin className="lIcon"/>
        </a>
        <a href="https://github.com/ngabomugisha" target="_blank" rel="noreferrer">
        <FaGithub className="lIcon2"/>
        </a>
        <a href="https://wa.me/+250786248680" target="_blank" rel="noreferrer">
        <FaWhatsapp className="lIcon3"/>
        </a>
        </>
    )
}

export default Info
