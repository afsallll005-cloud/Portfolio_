"use client";

import { useState, useEffect } from "react";
import './Skills.css';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/skills");
        const data = await res.json();
        setSkills(data);
      } catch (error) {
        console.error("Failed to fetch skills", error);
      }
    };
    
    fetchSkills();
  }, []);

  return (
    <div
      className="skills-section"
      id="skills"
    >

      <div className="section-label">
        SKILLS
      </div>


      <div className="skills-list">

        {skills.map((skill) => (

          <div
            className="skill-item"
            key={skill._id || skill.name}
          >

            <div className="skill-name" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {skill.icon && <img src={skill.icon} alt={skill.name} style={{ width: "24px", height: "24px" }} />}
              {skill.name}
            </div>


            <div className="skill-bar">

              <div
                className="skill-progress"
                style={{
                  width: '90%', // Defaulting to 90% since level isn't in DB yet
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}