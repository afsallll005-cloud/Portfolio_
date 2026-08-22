"use client";

import "./Works.css";

const projects = [
  {
    id: "01",
    title: "UCare",
    tags: ["Healthcare", "App Design"],
    image: "/images/works(1).png",
  },
  {
    id: "02",
    title: "TripzyGo",
    tags: ["Travel", "Web App"],
    image: "/images/works(2).png",
  },
  {
    id: "03",
    title: "Ziora",
    tags: ["E-Commerce", "Frontend"],
    image: "/images/works(3).png",
  },
  {
    id: "04",
    title: "ERP",
    tags: ["Management", "Dashboard"],
    image: "/images/works(1).png",
  },
];

export default function Works() {
  return (
    <section className="works-section" id="works">

      {/* =====================================================
          FIXED BACKGROUND WORD
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

        {projects.map((project) => (
          <article
            className="works-project"
            key={project.id}
          >

            {/* =================================================
                PROJECT CARD
            ================================================== */}

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


                {/* =============================================
                    HOVER CONTENT
                ============================================== */}

                <div className="works-hover-content">


                  {/* =========================================
                      TOP CONTENT
                  ========================================== */}

                  <div className="works-hover-top">

                    {/* PROJECT NUMBER */}

                    <span className="works-project-number">
                      {project.id}
                    </span>


                    {/* PROJECT TAGS */}

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


                  {/* =========================================
                      BOTTOM CONTENT
                  ========================================== */}

                  <div className="works-hover-bottom">

                    <h2 className="works-project-title">
                      {project.title}
                    </h2>

                  </div>

                </div>


                {/* =============================================
                    CENTER ARROW
                ============================================== */}

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

      </div>

    </section>
  );
}