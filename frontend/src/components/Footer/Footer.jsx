"use client";

import "./Footer.css";
import {
  FiArrowUpRight,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">

        {/* TOP CONTENT */}
        <div className="footer-top">

          {/* LEFT */}
          <div className="footer-intro">
            <p>
              Afsal is an independent creative
              <br />
              developer and solopreneur
            </p>
          </div>

          {/* EXPLORE */}
          <div className="footer-column">
            <span className="footer-label">Explore</span>

            <a href="#about">Bio</a>
            <a href="#newsletter">Newsletter</a>
            <a href="#contact">Contact</a>
          </div>

          {/* SOCIAL */}
          <div className="footer-column social-column">
            <span className="footer-label">Follow me</span>

            <div className="social-grid">
              <a href="#">
                <span>𝕏</span>
                @afsal
              </a>

              <a href="#">
                <FiInstagram />
                @afsal
              </a>

              <a href="#">
                <FiYoutube />
                @afsal
              </a>

              <a href="#">
                <FiLinkedin />
                @afsal
              </a>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="footer-actions">

            <a href="#contact" className="footer-action contact-link">
              <div>
                <span>Call Afsal</span>
                <small>Let's work together</small>
              </div>

              <div className="action-icon">
                <FiArrowUpRight />
              </div>
            </a>

            <div className="footer-line" />

            <a href="#tools" className="footer-action">
              <div>
                <span>Courses & Tools</span>
                <small>Creative tools</small>
              </div>

              <div className="action-icon dark">
                <FiArrowUpRight />
              </div>
            </a>

          </div>

        </div>

        {/* HUGE NAME */}
        <div className="footer-name-wrapper">
          <h1 className="footer-name">AFSAL</h1>
        </div>

        
      </div>
    </section>
  );
}