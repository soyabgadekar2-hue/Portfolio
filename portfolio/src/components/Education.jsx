
function Education() {
  const education = [
    {
      year: "2023 - 2026",
      degree: "Bachelor's Degree",
      field: "Computer Science / Information Technology",
      institution: "Your College Name",
      description:
        "Developing knowledge of programming, web technologies, databases, software engineering, and application development.",
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary Education",
      field: "Your Stream / Specialization",
      institution: "Your School / College Name",
      description:
        "Building a foundation in academic subjects, logical thinking, and problem-solving.",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-subtitle">
            My Academic Background
          </p>
          <h2>Education</h2>
        </div>

        <div className="education-grid">
          {education.map((item) => (
            <article
              className="education-card"
              key={`${item.degree}-${item.year}`}
            >
              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">
                <h3>{item.degree}</h3>
                <h4>{item.field}</h4>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
