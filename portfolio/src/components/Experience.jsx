
import experience from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">
            My Development Journey
          </p>
          <h2>Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((item, index) => (
            <article
              className="experience-item"
              key={`${item.role}-${item.year}`}
            >
              <div className="experience-year">
                {item.year}
              </div>

              <div className="experience-line">
                <span aria-hidden="true"></span>
              </div>

              <div className="experience-content">
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>

                <p>{item.description}</p>

                <div className="experience-technologies">
                  {item.technologies.map((technology) => (
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

export default Experience;
