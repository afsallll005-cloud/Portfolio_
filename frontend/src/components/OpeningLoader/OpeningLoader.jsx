"use client";

import { useEffect, useState, useRef } from "react";
import "./OpeningLoader.css";

const WORDS = [
  "HELLO",
  "CREATIVE DEVELOPER",
  "DIGITAL CRAFT",
  "MOHAMMED AFSAL",
];

export default function OpeningLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const animFrameRef = useRef(null);

  // Lock body scroll while loader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Smooth counter animation
  useEffect(() => {
    const duration = 1900; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Custom smooth easeOutQuart curve
      const eased = 1 - Math.pow(1 - t, 4);
      const currentVal = Math.floor(eased * 100);

      setProgress(currentVal);

      // Update cycling text according to progress
      if (currentVal < 25) {
        setWordIndex(0);
      } else if (currentVal < 55) {
        setWordIndex(1);
      } else if (currentVal < 80) {
        setWordIndex(2);
      } else {
        setWordIndex(3);
      }

      if (t < 1) {
        animFrameRef.current = requestAnimationFrame(updateCounter);
      } else {
        // Complete reached
        setProgress(100);
        setWordIndex(3);

        // Short hold before curtain exit
        const exitTimer = setTimeout(() => {
          setIsExiting(true);
        }, 220);

        // Clean unmount after curtain animation ends
        const finishTimer = setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = "";
          onComplete?.();
        }, 1150);

        return () => {
          clearTimeout(exitTimer);
          clearTimeout(finishTimer);
        };
      }
    };

    animFrameRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [onComplete]);

  if (isFinished) return null;

  // Status message based on progress
  let statusText = "INITIALIZING SYSTEM";
  if (progress >= 100) {
    statusText = "READY";
  } else if (progress >= 75) {
    statusText = "OPTIMIZING EXPERIENCE";
  } else if (progress >= 40) {
    statusText = "LOADING DIGITAL ASSETS";
  } else if (progress >= 15) {
    statusText = "MOUNTING COMPONENTS";
  }

  return (
    <aside
      className={`opening-loader ${isExiting ? "is-exiting" : ""}`}
      aria-label="Loading Mohammed Afsal Portfolio"
      aria-live="polite"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="loader-overlay-ambient" />
      <div className="loader-grid-pattern" />

      {/* Top Meta Bar */}
      <header className="loader-header">
        <div className="loader-brand">
          <span className="loader-status-dot" />
          <span className="loader-brand-title">SYSTEM {progress === 100 ? "ONLINE" : "BOOT"}</span>
        </div>

        <div className="loader-tag">
          <span>PORTFOLIO © 2026</span>
        </div>
      </header>

      {/* Centerpiece Word Reveal */}
      <main className="loader-center">
        <div className="loader-word-frame">
          <div className="loader-word-mask">
            <span key={wordIndex} className="loader-word-text">
              {WORDS[wordIndex]}
            </span>
          </div>
        </div>

        <p className="loader-subcaption">
          <span>DESIGN &amp; FULL-STACK ARCHITECTURE</span>
        </p>
      </main>

      {/* Bottom Progress Area */}
      <footer className="loader-footer">
        <div className="loader-footer-top">
          <div className="loader-status-tag">
            <span className="loader-status-pulse" />
            <span className="loader-status-name">{statusText}</span>
          </div>

          <div className="loader-counter">
            <span className="loader-counter-digits">
              {String(progress).padStart(2, "0")}
            </span>
            <span className="loader-counter-symbol">%</span>
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="loader-track">
          <div
            className="loader-fill"
            style={{ width: `${progress}%` }}
          >
            <div className="loader-fill-glow" />
          </div>
        </div>
      </footer>
    </aside>
  );
}