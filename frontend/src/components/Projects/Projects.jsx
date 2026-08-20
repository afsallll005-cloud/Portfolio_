
import "./Projects.css";

export default function Projects() {
  const projects = [
    { number: '01', title: 'E-commerce Platform', tech: 'React, Node.js, MongoDB', image: '/images/project1.jpg' },
    { number: '02', title: 'Portfolio Website', tech: 'Next.js, CSS', image: '/images/project2.jpg' },
    { number: '03', title: 'Task Management App', tech: 'Vue, Express, PostgreSQL', image: '/images/project3.jpg' }
  ];

  return (
    <section
      className="projects-section"
      id="projects"
    >

      {/* Heading */}

      <div className="projects-heading">

        <div>

          <span className="section-label">
            SELECTED WORK
          </span>

          <h2>
            PROJECTS
          </h2>

        </div>


        <p>
          A selection of projects I've designed,
          developed and brought to life.
        </p>

      </div>


      {/* Project Grid */}

      <div className="project-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            <div className="project-number">
              {project.number}
            </div>


            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />

              <div className="project-placeholder">
                {project.title.split(" ")[0]}
              </div>

            </div>


            <div className="project-info">

              <div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.tech}
                </p>

              </div>


              <span className="project-arrow">
                ↗
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}