import { useState } from "react";

export default function Education({
  education,
  handleChangeEducation,
  handleDeleteEducation,
  handleAddEducation,
}) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <section>
      <div className="header">
        <h2>Education</h2>
        <button onClick={handleClick}>&#8964;</button>
      </div>
      <div className={"education-container" + (!isShown ? " hidden" : "")}>
        {education.map((education) => (
          <div className="education-inputs" key={education.id}>
            <label>
              <p>Institution <span className="required">required</span></p>
              <input
                type="text"
                value={education.institution}
                onChange={(e) => {
                  handleChangeEducation(
                    education.id,
                    "institution",
                    e.target.value
                  );
                }}
              />
            </label>
            <label>
              <p>Degree <span className="required">required</span></p>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => {
                  handleChangeEducation(education.id, "degree", e.target.value);
                }}
              />
            </label>
            <label>
              <p>Start Date <span className="required">required</span></p>
              <input
                type="text"
                value={education.startDate}
                onChange={(e) => {
                  handleChangeEducation(
                    education.id,
                    "startDate",
                    e.target.value
                  );
                }}
              />
            </label>
            <label>
              <p>End Date <span className="required">required</span></p>
              <input
                type="text"
                value={education.endDate}
                onChange={(e) => {
                  handleChangeEducation(
                    education.id,
                    "endDate",
                    e.target.value
                  );
                }}
              />
            </label>
            <label>
              <p>Location <span className="recommended">recommended</span></p>
              <input
                type="text"
                value={education.location}
                onChange={(e) => {
                  handleChangeEducation(
                    education.id,
                    "location",
                    e.target.value
                  );
                }}
              />
            </label>
            <button
              onClick={() => {
                handleDeleteEducation(education.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            handleAddEducation();
          }}
        >
          Add
        </button>
      </div>
    </section>
  );
}
