import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/CV-Controleur-de-Gestion.jpeg.webp";
import IMG2 from "../../assets/téléchargement.png.jpeg";
import IMG3 from "../../assets/FB_IMG_1666775873235.jpg";

// Data Array pour améliorer votre portefeuille
const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Curriculum Vitae en ligne.",
    github: "https://ismael2110.github.io/",
    demo: "https://ismael2110.github.io/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Vérification de la Complexité d'un Mot de Passe",
    github: "https://github.com/Ismael2110/verificateur_mot_de_passe",
    demo: "https://github.com/Ismael2110/verificateur_mot_de_passe",
  },
  {
    id: 3,
    image: IMG3,
    title: "Annuaire du Gouvernement",
    github: "https://github.com/Ismael2110/Annuaire_du_gouvernement",
    demo: "https://github.com/Ismael2110/Annuaire_du_gouvernement",
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">Travaux récents</h5>
      <h2 className="text-light">Mes Projets</h2>
      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} className="image" alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
