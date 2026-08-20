"use client";

import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">

        {/* BRAND */}
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <span>HELLO, I'M</span>

          <h2>MOHAMMED AFSAL</h2>
        </a>


        {/* CENTER SOCIAL LINKS */}
        <div className="navbar-socials">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.2c0-3.76-2.01-5.51-4.69-5.51-2.16 0-3.13 1.19-3.67 2.03V8.5H9.14V21h3.5v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.87 2.02 3.32V21H21v-7.8Z"
              />
            </svg>
          </a>


          {/* GITHUB */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.14c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.37-5.25 5.66.41.35.77 1.04.77 2.1v3.11c0 .3.2.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
              />
            </svg>
          </a>


          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
              />
            </svg>
          </a>

        </div>


        {/* MENU BUTTON */}
        <button
          className={`menu-button ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </header>


      {/* FULLSCREEN MENU */}

      <div
        className={`fullscreen-menu ${
          menuOpen ? "show" : ""
        }`}
      >

        <button
          className="close-menu"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ×
        </button>


        <nav>

          <a href="#home" onClick={closeMenu}>
            HOME
          </a>

          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>

          <a href="#skills" onClick={closeMenu}>
            SKILLS
          </a>

          <a href="#projects" onClick={closeMenu}>
            PROJECTS
          </a>

          <a href="#experience" onClick={closeMenu}>
            EXPERIENCE
          </a>

          <a href="#contact" onClick={closeMenu}>
            CONTACT
          </a>

        </nav>

      </div>
    </>
  );
}