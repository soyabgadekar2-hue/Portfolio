function Experience() {
  const experiences = [
    {
      year: "2026 - Present",
      role: "Full Stack Developer",
      company: "Your Company / Organization",
      description:
        "Developing responsive web applications, building REST APIs, working with databases, and implementing modern frontend and backend solutions.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      year: "2025 - 2026",
      role: "Web Developer / Intern",
      company: "Company Name",
      description:
        "Worked on web development projects, created responsive interfaces, integrated APIs, and improved application functionality.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">My Professional Journey</p>
          <h2>Experience</h2>
        </div>

        <div className="experience-list">

          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>

              <div className="experience-year">
                {experience.year}
              </div>

              <div className="experience-line">
                <span></span>
              </div>

              <div className="experience-content">

                <h3>{experience.role}</h3>

                <h4>{experience.company}</h4>

                <p>
                  {experience.description}
                </p>

                <div className="experience-technologies">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;