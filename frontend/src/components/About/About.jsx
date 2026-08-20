"use client";

import Skills from "../Skills/Skills";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">

      {/* TOP INTRO */}
      <div className="about-top">

        <div className="about-eyebrow">
          <span className="about-line"></span>
          <span>ABOUT ME</span>
        </div>

        <h2 className="about-title">
          I CREATE
          <br />
          <span>DIGITAL EXPERIENCES</span>
          <br />
          THAT MATTER.
        </h2>

      </div>


      {/* MAIN CONTENT */}
      <div className="about-grid">

        {/* IMAGE */}
        <div className="about-visual">

          <div className="about-image">
            <img
          src="/images/mee(1).png"
              alt="Afsal - Full Stack Developer"
            />

            <div className="about-image-number">
              01
            </div>
          </div>

          <div className="about-image-info">
            <span>FULL STACK DEVELOPER</span>
            <span>2026 — PRESENT</span>
          </div>

        </div>


        {/* CONTENT */}
        <div className="about-copy">

          <div className="about-big-text">
            I turn ideas into
            <span> useful digital products.</span>
          </div>

          <div className="about-description">

            <p>
              I’m Afsal, a Full Stack Developer focused on
              building modern, responsive and user-friendly
              web applications.
            </p>

            <p>
              I enjoy working across both frontend and backend,
              combining thoughtful interfaces with reliable
              technology to create digital products that are
              simple, scalable and enjoyable to use.
            </p>

            <p>
              I enjoy working across both frontend and backend,
              combining thoughtful interfaces with reliable
              technology to create digital products that are
              simple, scalable and enjoyable to use.
            </p>

          </div>


          {/* DETAILS */}
          <div className="about-details">

            <div className="about-detail">
              <span>ROLE</span>
              <strong>FULL STACK DEVELOPER</strong>
            </div>

            <div className="about-detail">
              <span>STACK</span>
              <strong>MERN / NEXT.JS</strong>
            </div>

            <div className="about-detail">
              <span>APPROACH</span>
              <strong>DESIGN + DEVELOPMENT</strong>
            </div>

          </div>


          {/* SIGNATURE */}
          <div className="about-bottom">

            <div className="about-signature">
              Afsal
            </div>

            <span className="about-scroll">
              SCROLL TO EXPLORE ↓
            </span>

          </div>

        </div>

      </div>


      {/* SKILLS */}
      {/* <div className="about-skills">
        <Skills />
      </div> */}

    </section>
  );
}