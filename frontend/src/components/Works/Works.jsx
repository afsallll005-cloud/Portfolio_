"use client";

import { useState, useEffect } from "react";
import "./Works.css";

export default function Works() {
  const [mainProjects, setMainProjects] = useState([]);
  const [moreProjects, setMoreProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();
        setMainProjects(data.filter(p => p.isFeatured));
        setMoreProjects(data.filter(p => !p.isFeatured));
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    };
    
    fetchProjects();
  }, []);

  return (
    <section className="works-section" id="works">

      {/* =====================================================
          LARGE BACKGROUND WORD
      ====================================================== */}

      <div className="works-fixed-text">
        <div className="works-fixed-word">
          WORKS
        </div>
      </div>


      {/* =====================================================
          PROJECT SCROLL
      ====================================================== */}

      <div className="works-scroll">

        {/* ===================================================
            FIRST 4 PROJECTS
        ==================================================== */}

        {mainProjects.slice(0, 4).map((project) => (
          <article
            className="works-project"
            key={project._id || project.numberId}
          >

            <a
              href="#"
              className="works-project-card"
              aria-label={`View ${project.title} project`}
            >

              {/* =================================================
                  PROJECT IMAGE
              ================================================== */}

              <div className="works-project-image">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  loading="lazy"
                />


                {/* =================================================
                    HOVER CONTENT
                ================================================== */}

                <div className="works-hover-content">

                  {/* TOP */}

                  <div className="works-hover-top">

                    {/* NUMBER */}

                    <span className="works-project-number">
                      {project.numberId}
                    </span>


                    {/* TAGS */}

                    <div className="works-project-tags">

                      {project.tags.map((tag) => (
                        <span
                          className="works-project-tag"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}

                    </div>

                  </div>


                  {/* BOTTOM */}

                  <div className="works-hover-bottom">

                    <h2 className="works-project-title">
                      {project.title}
                    </h2>

                  </div>

                </div>


                {/* =================================================
                    CENTER HOVER ARROW
                ================================================== */}

                <div
                  className="works-project-hover"
                  aria-hidden="true"
                >
                  <span>↗</span>
                </div>

              </div>

            </a>

          </article>
        ))}


        {/* =====================================================
            MORE WORKS SECTION
        ====================================================== */}

        <section className="works-recognition">

          <div className="works-recognition-container">


            {/* =================================================
                SECTION HEADING
            ================================================== */}

            <div className="works-recognition-heading">

              <span>
                MORE WORKS
              </span>

            </div>


            {/* =================================================
                TABLE HEADER
            ================================================== */}

            <div className="works-recognition-header">

              <div>
                PROJECT
              </div>

              <div>
                TYPE
              </div>

              <div>
                YEAR
              </div>

            </div>


            {/* =================================================
                PROJECT LIST
            ================================================== */}

            <div className="works-recognition-list">

              {moreProjects.map((project) => (

                <a
                  href="#"
                  className="works-recognition-row"
                  key={project._id || project.numberId}
                  aria-label={`View ${project.title} project`}
                >

                  {/* =================================================
                      PROJECT NAME
                  ================================================== */}

                  <div className="works-recognition-project">

                    {project.title}

                  </div>


                  {/* =================================================
                      PROJECT TYPE
                  ================================================== */}

                  <div className="works-recognition-type">

                    {project.type}

                  </div>


                  {/* =================================================
                      YEAR
                  ================================================== */}

                  <div className="works-recognition-year">

                    {project.year}

                  </div>


                  {/* =================================================
                      HOVER IMAGE PREVIEW
                  ================================================== */}

                  <div
                    className="works-row-preview"
                    aria-hidden="true"
                  >

                    {/* IMAGE */}

                    <img
                      src={project.image}
                      alt=""
                    />


                    {/* PREVIEW INFORMATION */}

                    <div className="works-preview-info">

                      {/* NUMBER */}

                      <span className="works-preview-number">

                        {project.numberId}

                      </span>


                      {/* TITLE */}

                      <h3>

                        {project.title}

                      </h3>


                      {/* TYPE */}

                      <p>

                        {project.type}

                      </p>


                      {/* LINK */}

                      <span className="works-preview-link">

                        VIEW PROJECT ↗

                      </span>

                    </div>

                  </div>


                  {/* =================================================
                      HOVER ARROW
                  ================================================== */}

                  <div
                    className="works-row-arrow"
                    aria-hidden="true"
                  >

                    ↗

                  </div>

                </a>

              ))}

            </div>

          </div>

        </section>

      </div>

    </section>
  );
}