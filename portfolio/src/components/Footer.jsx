function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            YourName<span>.</span>
          </a>

          <p>
            Full Stack Developer building modern and
            user-friendly web applications.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
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
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} YourName. All rights reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;