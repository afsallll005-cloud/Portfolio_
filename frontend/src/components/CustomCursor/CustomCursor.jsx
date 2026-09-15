"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import "./CustomCursor.css";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  '[role="button"]',
  ".social-link",
  ".view-work",
  ".works-project-card",
  ".works-recognition-row",
  ".projects-count",
  ".service-card",
  ".service-arrow",
  ".menu-button",
  ".close-menu",
  "[data-cursor]",
  "[data-cursor-text]",
].join(", ");

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState("default"); // "default" | "pointer" | "text" | "card"
  const [cursorText, setCursorText] = useState("");
  const [isDown, setIsDown] = useState(false);
  const [ripples, setRipples] = useState([]);

  // Mutable state ref for animation loop access without stale closures
  const cursorState = useRef({
    isHovering: false,
    hoverType: "default",
    hasText: false,
    isDown: false,
  });

  // Target mouse position
  const mousePos = useRef({ x: -200, y: -200 });
  // Interpolated follower position
  const followerPos = useRef({ x: -200, y: -200 });
  const hasInitialized = useRef(false);

  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const auraRef = useRef(null);
  const animFrameId = useRef(null);

  // Check if device supports fine pointer (mouse/trackpad)
  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isFinePointer) {
      setMounted(true);
      document.body.classList.add("has-custom-cursor");
    }

    return () => {
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  // Synchronize state ref
  useEffect(() => {
    cursorState.current = {
      isHovering,
      hoverType,
      hasText: Boolean(cursorText),
      isDown,
    };
  }, [isHovering, hoverType, cursorText, isDown]);

  // High performance animation loop
  const updateCursorPhysics = useCallback(() => {
    const targetX = mousePos.current.x;
    const targetY = mousePos.current.y;

    // 1. Direct Dot Positioning (zero delay)
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    }

    // 2. Direct Ambient Glow Positioning
    if (auraRef.current) {
      auraRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    }

    // 3. Smooth Physics Follower (lerp interpolation)
    const currentX = followerPos.current.x;
    const currentY = followerPos.current.y;
    const ease = 0.16;

    const dx = targetX - currentX;
    const dy = targetY - currentY;

    followerPos.current.x += dx * ease;
    followerPos.current.y += dy * ease;

    if (followerRef.current) {
      const state = cursorState.current;

      // Keep upright and unskewed when displaying text badge
      if (state.isHovering && (state.hoverType === "card" || state.hasText)) {
        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) rotate(0deg) scale(1, 1)`;
      } else {
        const speed = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        const stretchScale = Math.min(speed * 0.0028, 0.28);
        const scaleX = 1 + stretchScale;
        const scaleY = 1 - stretchScale * 0.45;

        followerRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
      }
    }

    animFrameId.current = requestAnimationFrame(updateCursorPhysics);
  }, []);

  const isVisibleRef = useRef(false);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!hasInitialized.current) {
        followerPos.current = { x: e.clientX, y: e.clientY };
        hasInitialized.current = true;
        isVisibleRef.current = true;
        setVisible(true);
      } else if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setVisible(true);
      }
    };

    const handleMouseDown = () => {
      setIsDown(true);
    };

    const handleMouseUp = (e) => {
      setIsDown(false);
      // Spawn ripple pulse
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setVisible(true);
    };

    // Detect hover over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest(INTERACTIVE_SELECTOR);

      if (interactive) {
        setIsHovering(true);

        const customText = interactive.getAttribute("data-cursor-text");
        if (customText) {
          setCursorText(customText);
          setHoverType("card");
          return;
        }

        if (
          interactive.classList.contains("works-project-card") ||
          interactive.classList.contains("works-recognition-row")
        ) {
          setCursorText("VIEW");
          setHoverType("card");
          return;
        }

        const tag = interactive.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea") {
          setHoverType("text");
          setCursorText("");
        } else if (
          tag === "button" ||
          tag === "a" ||
          interactive.getAttribute("role") === "button" ||
          interactive.classList.contains("service-arrow") ||
          interactive.classList.contains("service-card") ||
          interactive.classList.contains("projects-count")
        ) {
          setHoverType("pointer");
          setCursorText("");
        } else {
          setHoverType("default");
          setCursorText("");
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest(INTERACTIVE_SELECTOR);

      if (interactive) {
        const related = e.relatedTarget;
        if (
          related instanceof Element &&
          related.closest(INTERACTIVE_SELECTOR)
        ) {
          return;
        }
        setIsHovering(false);
        setHoverType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    animFrameId.current = requestAnimationFrame(updateCursorPhysics);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [mounted, updateCursorPhysics]);

  const removeRipple = (id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  if (!mounted) return null;

  return (
    <div
      className={`custom-cursor-container ${visible ? "is-visible" : "is-hidden"} ${
        isHovering ? "is-hovering" : ""
      } ${isDown ? "is-down" : ""} hover-${hoverType}`}
      aria-hidden="true"
    >
      {/* Ambient soft glow spotlight */}
      <div ref={auraRef} className="cursor-ambient-aura" />

      {/* Smooth momentum follower ring */}
      <div ref={followerRef} className="cursor-follower">
        <div className="cursor-follower-ring">
          {cursorText && (
            <span className="cursor-label-text">{cursorText}</span>
          )}
        </div>
      </div>

      {/* Precise lead dot (zero latency) */}
      <div ref={dotRef} className="cursor-dot" />

      {/* Click ripple bursts */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
          onAnimationEnd={() => removeRipple(ripple.id)}
        />
      ))}
    </div>
  );
}
