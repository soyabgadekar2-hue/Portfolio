
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">Get In Touch</p>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Have a project in mind?</h3>

            <p>
              I'm interested in web development projects,
              collaboration, and opportunities to build
              useful digital experiences. Feel free to contact me.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  ✉
                </span>
                <div>
                  <small>Email</small>
                  <a href="mailto:your.email@example.com">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  ⌖
                </span>
                <div>
                  <small>Location</small>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            onChange={() => setSubmitted(false)}
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit" className="primary-button">
              Submit Message →
            </button>

            {submitted && (
              <p role="status" className="form-success">
                Form validation passed. Message sending
                hasn't been connected yet.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
