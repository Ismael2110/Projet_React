import React from "react";
import "./services.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5 className="text-light">Comment puis-je t'aider</h5>
      <h2 className="text-light">prestations de service</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI | UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Site institutionnel, personnel, blog</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>E-commerce</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Page de destination et refonte du site</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>La photographie numérique</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Conception pédagogique (cours en ligne)</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Édition vidéo</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Kit de conception et identité visuelle</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Front End</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Développement et hébergement</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>React.JS | Next.JS</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Courriel d'entreprise</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Migrations (sans perte de classement)</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Automatisations, optimisations et performances</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Personnalisations et intégrations</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Cours en ligne et infoproduits</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Marketing et planification</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>SEO – Trafic organique</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>PPC – Trafic payant</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Planification de l'entonnoir numérique</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Marketing par courrier</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Sorties</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Analyse de la concurrence</p>
            </li>
            <li>
              <BsFillCheckCircleFill className="service__list-icon" />
              <p>Analytique</p>
            </li>
          </ul>
        </article>
      </div>
      <div>
        {/* <a href="https://cloudez.io/br?utm_campaign=partner-atavares-seoxperts-badge&autm_medium=badge&utm_source=partner&utm_content=partner&utm_term=">
        <img alt="" width="220" height="60" src="https://files.cloudez.io/stamp/partner-sm.svg">
      </a> */}
      </div>
    </section>
  );
};

export default Services;
