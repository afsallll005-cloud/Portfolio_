"use client";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Text */}
      <div className="hero-background-text">
        DEVELOPER
      </div>

      {/* Profile Image */}
      <div className="hero-image-wrapper">
        <img
          src="/images/mee(2).png"
          alt="Mohammed Afsal"
          className="hero-image"
        />
      </div>

      {/* Left Content */}
      <div className="hero-left">

        <div className="hero-intro">

          {/* <span className="intro-line"></span> */}

          <div>
            {/* <p className="intro-small">
              HELLO, I'M AFSAL
            </p> */}

            <h2>
              YO, I'M AFSAL
              Fullstack Developer,
              I BUILD DIGITAL
              EXPERIENCES
              THAT MATTER.
            </h2>
          </div>

        </div>

        {/* <a href="#projects" className="view-work">
          <span>VIEW WORK</span>
          <span className="arrow">↗</span>
        </a> */}

      </div>

      {/* Right Statistics */}
      <div className="hero-right">

        <div className="satisfaction">
          <strong>
            98<span>%</span>
          </strong>

          <p>
            CLIENT SATISFACTION
            <br />
            RATE
          </p>
        </div>

        <div className="projects-count">
          <strong>20+</strong>

          <p>
            PROJECTS
            <br />
            COMPLETED
          </p>
        </div>

      </div>

    </section>
  );
}