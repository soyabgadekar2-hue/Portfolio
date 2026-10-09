function About() {
  const highlights = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building responsive, interactive and user-friendly interfaces using React, JavaScript, HTML and CSS.",
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Developing server-side applications, REST APIs and backend functionality using Node.js and Express.",
    },
    {
      number: "03",
      title: "Database Management",
      description:
        "Working with databases to store, organize and retrieve application data efficiently.",
    },
  ];

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
              Turning ideas into digital experiences.
            </h3>

            <p>
              I'm a Full Stack Developer passionate about
              building modern web applications that combine
              clean design with reliable functionality.
            </p>

            <p>
              I enjoy working across the frontend and backend,
              from developing responsive interfaces to creating
              APIs and connecting databases.
            </p>

            <p>
              My goal is to write clean, maintainable code,
              solve real-world problems and continuously improve
              my development skills.
            </p>

            <a href="#contact" className="primary-button">
              Let's Work Together
            </a>
          </div>

          <div className="about-details">
            {highlights.map((item) => (
              <article className="detail-card" key={item.number}>
                <span className="detail-number">
                  {item.number}
                </span>

                <h4>{item.title}</h4>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;