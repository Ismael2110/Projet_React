import React from "react";
import "./experience.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-light">Mes compétences</h5>
      <h2 className="text-light">Expérience de projet</h2>
      <div className="container experience__container">
        <div className="experience__title-ti">
          <h3>Front-end Dev.</h3>
          <div className="experience__content">
            <article className="experience__details" title="Web Semântica, XML, Web Standards">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>HTML5</h5>
              </div>
              <progress value="90" max="100">
                95%
              </progress>
            </article>
            <article className="experience__details" title="Bootstrap, Tailwind, SASS, Foundation, Frameworks e Metodologias">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>CSS</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details" title="DOM, APIs, JSON">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5 title="Vanilla, ES5, ES6, Jquery">JavaScript</h5>
              </div>
              <progress value="40" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>React Js</h5>
              </div>
              <progress value="55" max="100"></progress>
            </article>
            <article className="experience__details" title="Woocommerce, LMS, Customizações, Elementor, Temas e Plugins">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Angular</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details" title="Wordpress, Moodle, Blackboard, Talent LMS, LearnDash">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>C++</h5>
              </div>
              <progress value="70" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Python</h5>
              </div>
              <progress value="20" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>PHP e MySQL</h5>
              </div>
              <progress value="45" max="100"></progress>
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Back-end</h3>
          <div className="experience__content">
            <article className="experience__details" title="">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>JavaScript</h5>
              </div>
              <progress value="95" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Python</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5 title="Vanilla, ES5, ES6, Jquery">Php</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Java</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>

            <article className="experience__details" title="SEO técnico, local, otimizações">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>C++</h5>
              </div>
              <progress value="75" max="100"></progress>
            </article>
            {/* <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Analytics</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Dashboards</h5>
              </div>
              <progress value="80" max="100"></progress>
            </article> */}
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Mobile</h3>
          <div className="experience__content">
            <article className="experience__details" title="Edição e tratamento">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Java</h5>
              </div>
              <progress value="75" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>C</h5>
              </div>
              <progress value="85" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>C++</h5>
              </div>
              <progress value="95" max="100"></progress>
            </article>

            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Objective-C</h5>
              </div>
              <progress value="60" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Swift</h5>
              </div>
              <progress value="40" max="100"></progress>
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className="experience__details-icon" />
                <h5>Flutter</h5>
              </div>
              <progress value="85" max="100"></progress>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
