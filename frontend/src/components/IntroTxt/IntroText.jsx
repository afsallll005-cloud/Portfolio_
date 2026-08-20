// IntroTxt.jsx
"use client";

import "./Introtext.css";

export default function IntroTxt() {
  return (
    <section className="intro-txt">
      <div className="intro-txt-content">
        <p className="intro-txt-title">
          I DESIGN AND DEVELOP DIGITAL SOLUTIONS
          <br />
          THAT HELP BUSINESSES GROW FASTER.
        </p>

        <a href="#projects" className="intro-txt-button">
          VIEW PROJECTS
          <span className="arrow">↗</span>
        </a>
      </div>
    </section>
  );
}