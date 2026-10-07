function Education() {
  const education = [
    {
      year: "2023 - 2026",
      degree: "Bachelor's Degree",
      field: "Computer Science / Information Technology",
      institution: "K.A Lokapue college",
      description:
        "Studying computer science concepts, software development, web technologies, databases and modern application development.",
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary Education",
      field: "Science / Computer Science",
      institution: "Your School / College Name",
      description:
        "Built a strong foundation in computer science, programming and problem-solving.",
    },
  ];

  return (
    <section id="education" className="education">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-subtitle">My Academic Journey</p>
          <h2>Education</h2>
        </div>

        <div className="education-grid">

          {education.map((item, index) => (
            <div className="education-card" key={index}>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">

                <h3>{item.degree}</h3>

                <h4>{item.field}</h4>

                <p className="education-institution">
                  {item.institution}
                </p>

                <p>
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;