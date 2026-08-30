"use client";

import "./Works.css";

const projects = [
  {
    id: "01",
    title: "UCare",
    type: "Healthcare Management Platform",
    tags: ["Healthcare", "App Design"],
    year: "2026",
    image: "/images/works(1).png",
  },
  {
    id: "02",
    title: "TripzyGo",
    type: "Travel Booking Platform",
    tags: ["Travel", "Web App"],
    year: "2026",
    image: "/images/works(2).png",
  },
  {
    id: "03",
    title: "Ziora",
    type: "E-Commerce Web Application",
    tags: ["E-Commerce", "Frontend"],
    year: "2026",
    image: "/images/works(3).png",
  },
  {
    id: "04",
    title: "ERP",
    type: "Retail Management System",
    tags: ["Management", "Dashboard"],
    year: "2026",
    image: "/images/works(1).png",
  },
  {
    id: "05",
    title: "Portfolio",
    type: "Personal Portfolio Website",
    tags: ["Portfolio", "Web Design"],
    year: "2026",
    image: "/images/works(2).png",
  },
  {
    id: "06",
    title: "Frontend",
    type: "Responsive Web Design",
    tags: ["Frontend", "Web Design"],
    year: "2025",
    image: "/images/works(3).png",
  },
];

export default function Works() {
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

        {projects.slice(0, 4).map((project) => (
          <article
            className="works-project"
            key={project.id}
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
                      {project.id}
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

              {projects.map((project) => (

                <a
                  href="#"
                  className="works-recognition-row"
                  key={project.id}
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

                        {project.id}

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