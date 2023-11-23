import React from 'react'
// import './socialicons.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const SocialIcons = (props) => {
    return (
        <div className={props.position}>
            <a href="https://www.facebook.com/ismael.compaore.940?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <BsFacebook />
            </a>
            <a href="https://www.instagram.com/ismael.compaore?igshid=OGQ5ZDc2ODk2ZA" target="_blank" rel="noopener noreferrer">
                <BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/isma%C3%ABl-compaor%C3%A9-864523256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
            </a>
            <a href="https://x.com/Compaor5Ismael?t=YK8TOTIeUVxqavnMJkGrfw&s=09" target="_blank" rel="noopener noreferrer">
                <BsTwitter />
            </a>
        
            <a href="https://github.com/Ismael2110" target="_blank" rel="noopener noreferrer">
                <BsGithub />
            </a>
        </div>
  )
}

export default SocialIcons
