"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

const DEFAULT_HERO_DATA = {
  backgroundText: "DEVELOPER",
  title: "YO, I'M AFSAL",
  subtitle: "Fullstack Developer,\nI BUILD DIGITAL\nEXPERIENCES\nTHAT MATTER.",
  image: "/images/mee(2).png",
  stat1Value: "98%",
  stat1Label: "CLIENT SATISFACTION\nRATE",
  stat2Value: "20+",
  stat2Label: "PROJECTS\nCOMPLETED",
};

export default function Hero() {
  const [heroData, setHeroData] = useState(DEFAULT_HERO_DATA);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/hero");
        if (res.ok) {
          const data = await res.json();
          if (data && data.title) {
            setHeroData(data);
          }
        }
      } catch (error) {
        console.warn("Could not fetch dynamic hero content, using defaults:", error.message);
      }
    };
    
    fetchHero();
  }, []);

  return (
    <section className="hero" id="home">

      {/* Background Text */}
      <div className="hero-background-text">
        {heroData.backgroundText}
      </div>

      {/* Profile Image */}
      <div className="hero-image-wrapper">
        <img
          src={heroData.image}
          alt="Profile"
          className="hero-image"
        />
      </div>

      {/* Left Content */}
      <div className="hero-left">
        <div className="hero-intro">
          <div>
            <h2>
              {heroData.title}
              <br />
              {heroData.subtitle.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>

      {/* Right Statistics */}
      <div className="hero-right">
        <div className="satisfaction">
          <strong>
            {heroData.stat1Value.replace('%', '')}
            {heroData.stat1Value.includes('%') && <span>%</span>}
          </strong>

          <p>
            {heroData.stat1Label.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="projects-count">
          <strong>{heroData.stat2Value}</strong>

          <p>
            {heroData.stat2Label.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}