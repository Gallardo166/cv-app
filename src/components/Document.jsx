import html2canvas from "html2canvas";
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
      <button 
        className="print"
        onClick={() => window.print()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>printer-outline</title><path d="M19 8C20.66 8 22 9.34 22 11V17H18V21H6V17H2V11C2 9.34 3.34 8 5 8H6V3H18V8H19M8 5V8H16V5H8M16 19V15H8V19H16M18 15H20V11C20 10.45 19.55 10 19 10H5C4.45 10 4 10.45 4 11V15H6V13H18V15M19 11.5C19 12.05 18.55 12.5 18 12.5C17.45 12.5 17 12.05 17 11.5C17 10.95 17.45 10.5 18 10.5C18.55 10.5 19 10.95 19 11.5Z" /></svg>
      </button>
      <button 
        className="download"
        onClick={() => {
          const doc = document.querySelector(".document");
          const printButton = document.querySelector(".print");
          const downloadButton = document.querySelector(".download");
          printButton.style.visibility = "hidden";
          downloadButton.style.visibility = "hidden";
          html2canvas(doc).then(function(canvas) {
              const myImage = canvas.toDataURL();
              const link = document.createElement("a");

              link.download = "CV.png";
              link.href = myImage;
              document.body.appendChild(link);
              link.click();
              clearDynamicLink(link);
            })
          printButton.style.visibility = "visible";
          downloadButton.style.visibility = "visible";
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>download</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
      </button>
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
            {skills[categoryId].childIds.map((skillId, index) => (
              <h5 key={skillId}>
                {(index === 0 ? "" : ", ") + skills[skillId].skill}
              </h5>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
