"use client";

import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/hero");
        const data = await res.json();
        setHeroData(data);
      } catch (error) {
        console.error("Failed to fetch hero content", error);
      }
    };
    
    fetchHero();
  }, []);

  if (!heroData) {
    // Optionally return a loading state or a skeleton here
    return (
      <section className="hero" id="home">
        <div className="hero-background-text">DEVELOPER</div>
      </section>
    );
  }

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