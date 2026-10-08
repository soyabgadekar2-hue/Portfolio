import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">
            My Professional Journey
          </p>

          <h2>Experience</h2>
        </div>

        <div className="experience-list">

          {experience.map((item, index) => (
            <div
              className="experience-item"
              key={index}
            >

              <div className="experience-year">
                {item.year}
              </div>

              <div className="experience-line">
                <span></span>
              </div>

              <div className="experience-content">

                <h3>{item.role}</h3>

                <h4>{item.company}</h4>

                <p>
                  {item.description}
                </p>

                <div className="experience-technologies">

                  {item.technologies.map((technology) => (
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