import React from 'react'
import Typical from 'react-typical'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/IsmaelCpr.jpg'
import SocialIcons from '../socialicons/SocialIcons'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Bonjour, je m'appelle </h5>
        <h1 className='text-light'>Ismael COMPAORE</h1>
        {" "}
        <h3 className="mono text-light">
          <Typical
            loop={Infinity}
            steps={[
              "Création, développement de sites Web 🌐",
              1000,
              "Développeur Front-End. 💻",
              1000,
              "Projets, UX|UI Design 🎨",
              1000,
              ]}
            />
        </h3>
        <CTA />
        <SocialIcons position='header__socialicons' />
        <div className="me">
          <img src={ME} alt="André Tavares Fotografando" />
        </div>
        <a href="#contact" className='scroll__down'>
          Faire Défiler
        </a>
      </div>
    </header>
  )
}