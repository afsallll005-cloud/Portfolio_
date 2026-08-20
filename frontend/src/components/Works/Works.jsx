"use client";

import "./Works.css";

const projects = [
  {
    id: "01",
    title: "UCare",
    tags: ["Healthcare", "App Design"],
    image: "/images/projects/ucare.jpg",
  },
  {
    id: "02",
    title: "TripzyGo",
    tags: ["Travel", "Web App"],
    image: "/images/projects/tripzygo.jpg",
  },
  {
    id: "03",
    title: "Ziora",
    tags: ["E-Commerce", "Frontend"],
    image: "/images/projects/ziora.jpg",
  },
  {
    id: "04",
    title: "ERP",
    tags: ["Management", "Dashboard"],
    image: "/images/projects/erp.jpg",
  },
];

export default function Works() {
  return (
    <section className="works-section" id="works">
      {/* Fixed background word */}
      <div className="works-fixed-text">
        <div className="works-fixed-word">WORKS</div>
      </div>

      {/* Floating project cards */}
      <div className="works-scroll">
        {projects.map((project) => (
          <article className="works-project" key={project.id}>
            <a href="#" className="works-project-card">
              <div className="works-project-header">
                <h2 className="works-project-title">{project.title}</h2>

                <div className="works-project-tags">
                  {project.tags.map((tag) => (
                    <span className="works-project-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="works-project-image">
                <img src={project.image} alt={project.title} />
                <div className="works-project-hover">↗</div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}