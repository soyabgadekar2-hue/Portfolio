import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">What I Work With</p>
          <h2>My Skills</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.category}
            >

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