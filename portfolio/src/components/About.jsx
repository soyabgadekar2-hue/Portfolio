function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">Get To Know Me</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>
              Building ideas into modern web experiences.
            </h3>

            <p>
              I'm a passionate Full Stack Developer who enjoys creating
              modern, responsive and user-friendly web applications.
            </p>

            <p>
              I work across both frontend and backend development, building
              complete applications from user interfaces to server-side
              logic, APIs and databases.
            </p>

            <p>
              I focus on writing clean, maintainable code and developing
              applications that are reliable, scalable and easy to use.
            </p>

            <a href="#contact" className="primary-button">
              Let's Work Together
            </a>
          </div>

          <div className="about-details">

            <div className="detail-card">
              <span className="detail-number">01</span>
              <h4>Frontend Development</h4>
              <p>
                Creating responsive and interactive user interfaces with
                modern web technologies.
              </p>
            </div>

            <div className="detail-card">
              <span className="detail-number">02</span>
              <h4>Backend Development</h4>
              <p>
                Building secure APIs, server-side applications and
                backend services.
              </p>
            </div>

            <div className="detail-card">
              <span className="detail-number">03</span>
              <h4>Database & APIs</h4>
              <p>
                Designing database structures and developing RESTful APIs
                for web applications.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;