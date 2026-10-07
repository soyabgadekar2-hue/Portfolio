function Projects() {
  const projects = [
    {
      number: "01",
      title: "Project One",
      description:
        "A modern full-stack web application with a responsive interface, backend APIs and database integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/",
      live: "#",
    },
    {
      number: "02",
      title: "Project Two",
      description:
        "A responsive web application focused on clean UI, smooth user experience and efficient functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/",
      live: "#",
    },
    {
      number: "03",
      title: "Project Three",
      description:
        "A backend-driven application featuring REST APIs, authentication, database operations and secure data handling.",
      technologies: ["Node.js", "Express", "MongoDB", "REST API"],
      github: "https://github.com/",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">What I've Built</p>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;