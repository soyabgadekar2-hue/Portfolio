import Hero3D from "./Hero3D";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1>
            Your Name
          </h1>

          <h2>
            Full Stack Developer
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using frontend and backend technologies.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="primary-button"
            >
              View My Work
            </a>

            <a
              href="/resume/resume.pdf"
              className="secondary-button"
              download
            >
              Download Resume
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="#contact">
              Email
            </a>

          </div>

        </div>

        <div className="hero-image-container">
          <Hero3D />
        </div>

      </div>
    </section>
  );
}

export default Hero;