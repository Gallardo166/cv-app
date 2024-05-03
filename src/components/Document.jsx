import "../styles/Document.css";

export default function Document({
  personalDetails,
  education,
  experience,
  skills,
  styles,
}) {
  return (
    <div className="document" style={styles}>
      <h1>{personalDetails.fullName}</h1>
      <div className="details">
        <h3>{personalDetails.phoneNumber}</h3>
        <h2>|</h2>
        <h3>{personalDetails.email}</h3>
        {personalDetails.linkedIn ? (
          <div>
            <h2>|</h2>
            <h3>{personalDetails.linkedIn}</h3>
          </div>
        ) : null}
        {personalDetails.gitHub ? (
          <div>
            <h2>|</h2>
            <h3>{personalDetails.gitHub}</h3>
          </div>
        ) : null}
      </div>
      <div className="education">
        <h2>Education</h2>
        <hr></hr>
        {education.map((education) => (
          <div key={education.id}>
            <h3>{education.institution}</h3>
            <h4>{education.location}</h4>
            <h5>{education.degree}</h5>
            <h5 className="date">
              {education.startDate +
                (education.endDate ? " - " + education.endDate : "")}
            </h5>
          </div>
        ))}
      </div>
      <div className="experience">
        <h2>Experience</h2>
        <hr></hr>
        {experience.root.childIds.map((experienceId) => (
          <div key={experienceId}>
            <h3>{experience[experienceId].organization}</h3>
            <h4>
              {experience[experienceId].startDate +
                (experience[experienceId].endDate
                  ? " - " + experience[experienceId].endDate
                  : "")}
            </h4>
            <h5>{experience[experienceId].position}</h5>
            <h5 className="location">{experience[experienceId].location}</h5>
            <ul>
              {experience[experienceId].childIds.map((contributionId) => (
                <li key={contributionId} style={styles}>
                  {experience[contributionId].contribution}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="skills">
        <h2>Technical Skills</h2>
        <hr></hr>
        {skills.root.childIds.map((categoryId) => (
          <div key={categoryId}>
            <h3>{skills[categoryId].category + ":"}</h3>
            {skills[categoryId].childIds.map((skillId) => (
              <h5 key={skillId}>
                {(skills[categoryId].childIds.indexOf(skillId) === 0
                  ? ""
                  : ", ") + skills[skillId].skill}
              </h5>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
