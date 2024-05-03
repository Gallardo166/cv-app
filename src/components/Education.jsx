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
      <div className="header" onClick={handleClick}>
        <h2>Education</h2>
        <h2 className={"arrow" + (!isShown ? " down" : " up")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>chevron-down</title>
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </h2>
      </div>
      <div className={"education-container" + (!isShown ? " hidden" : "")}>
        {education.map((education, index) => (
          <div className="education-inputs" key={education.id}>
            <label>
              <p>
                Institution <span className="required">required</span>
              </p>
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
              <p>
                Degree <span className="required">required</span>
              </p>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => {
                  handleChangeEducation(education.id, "degree", e.target.value);
                }}
              />
            </label>
            <label>
              <p>
                Start Date <span className="required">required</span>
              </p>
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
              <p>
                End Date <span className="required">required</span>
              </p>
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
              <p>
                Location <span className="recommended">recommended</span>
              </p>
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
            <hr></hr>
          </div>
        ))}
        <button
          onClick={() => {
            handleAddEducation();
          }}
        >
          Add Education
        </button>
      </div>
    </section>
  );
}
