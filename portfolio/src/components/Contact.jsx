function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">Get In Touch</p>
          <h2>Let's Work Together</h2>
        </div>

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            <h3>
              Have a project in mind?
            </h3>

            <p>
              I'm always interested in hearing about new projects,
              opportunities and ideas. Feel free to get in touch.
            </p>

            <div className="contact-details">

              <div className="contact-item">
                <span className="contact-icon">✉</span>

                <div>
                  <small>Email</small>
                  <a href="mailto:your.email@example.com">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">☎</span>

                <div>
                  <small>Phone</small>
                  <a href="tel:+910000000000">
                    +91 00000 00000
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">⌖</span>

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

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Your Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What is this about?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="primary-button"
            >
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;