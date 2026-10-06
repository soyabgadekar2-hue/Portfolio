function Skills() {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "REST APIs",
      ],
    },
    {
      category: "Database",
      technologies: [
        "MongoDB",
        "Mongoose",
        "MySQL",
      ],
    },
    {
      category: "Tools & Others",
      technologies: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "npm",
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">What I Work With</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-number">
                0{index + 1}
              </div>

              <h3>{skill.category}</h3>

              <div className="skill-list">
                {skill.technologies.map((technology) => (
                  <span
                    className="skill-tag"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;