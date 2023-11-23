import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
import {FaHatWizard} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k21tg8s', 'template_8aq38hi', form.current, '5SzJoWUkRHKf1tpY1')
    setMsg("Message envoyé! Merci.")
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5 className='text-light'>Parlez-moi de vos projets ou laissez un commentaire !</h5>
      <h2 className='text-light'>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>ismaelcompaore08@gmail.com</h5>
            <a href="mailto:ismaelcompaore08@gmail.com" >Message</a>
          </article>
          <article className="contact__option">
            <FaHatWizard className="contact__option-icon"/>
            <h4>Site</h4>
            <h5>Site universitaire</h5>
            <a href="https://univ-virtuelle.bf" target="_blank" rel="noopener noreferrer">univ-virtuelle.bf</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+22661965940</h5>
            <a href="https://wa.me/message/HHVKC53QFOWZI1" target="_blank" rel="noopener noreferrer">Message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Votre nom" required />
            <input type="email" name="email" placeholder="Votre email" required />
            <textarea name="message" rows="7" required placeholder="Message texte"></textarea>
            <button type="submit" className="btn btn-primary">Envoyer</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact