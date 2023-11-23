import React from "react";
import "./about.css";
import Andre from "../../assets/IsmaelCpr.jpg";
import { GiNinjaHead } from "react-icons/gi";
import { GoOrganization } from "react-icons/go";
import { RiTeamFill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-light">Travailler sur des projets</h5>
      <h2 className="text-light">Technologie, et éducation</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Andre} alt="André Tavares por Nathalia Millen" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiNinjaHead className="about__icon" />
              <h5>Experiences</h5>
              <small>+03 ans</small>
            </article>
            <article className="about__card">
              <GoOrganization className="about__icon" />
              <h5>Clients</h5>
              <small>Accompagnement et conseils</small>
            </article>
            <article className="about__card">
              <RiTeamFill className="about__icon" />
              <h5>Projets</h5>
              <small>Equipes</small>
            </article>
          </div>
          <p>Ismael COMPAORE est un jeune homme de 24 ans, étudiants en 3e année en génie logiciel. Il est passionné d'informatique et aspire à devenir un développeur de logiciels de haut niveau. En plus d'être une personne positive et optimiste, je suis toujours prèt à aider les autres et je suis toujours à la recherche de nouvelles facon de faire une différence dans le monde.</p>
          <a href="#contact" className="btn btn-primary">
          Savoir plus.
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
