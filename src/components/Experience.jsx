import { useState } from "react";

export default function Experience({
  experience,
  handleChangeExperience,
  handleDeleteExperience,
  handleAddExperience,
}) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <section>
      <div className="header">
        <h2>Experience</h2>
        <button onClick={handleClick}>&#8964;</button>
      </div>
      <div className={"content" + (!isShown ? " hidden" : "")}>
        {experience.root.childIds.map((experienceId) => (
          <div className="experience" key={experienceId}>
            <label>
              Organization
              <input
                type="text"
                value={experience[experienceId].organization}
                onChange={(e) => {
                  handleChangeExperience(
                    experienceId,
                    "organization",
                    e.target.value
                  );
                }}
              />
            </label>
            <label>
              Position
              <input
                type="text"
                value={experience[experienceId].position}
                onChange={(e) => {
                  handleChangeExperience(
                    experienceId,
                    "position",
                    e.target.value
                  );
                }}
              />
            </label>
            <label>
              Start Date
              <input
                type="text"
                value={experience[experienceId].startDate}
                onChange={(e) => {
                  handleChangeExperience(
                    experienceId,
                    "startDate",
                    e.target.value
                  );
                }}
              />
            </label>
            <label>
              End Date
              <input
                type="text"
                value={experience[experienceId].endDate}
                onChange={(e) => {
                  handleChangeExperience(
                    experienceId,
                    "endDate",
                    e.target.value
                  );
                }}
              />
            </label>
            <p>Contributions</p>
            {experience[experienceId].childIds.map((contributionId) => (
              <div key={contributionId}>
                <label>
                  <input
                    type="text"
                    value={experience[contributionId].contribution}
                    onChange={(e) => {
                      handleChangeExperience(
                        contributionId,
                        "contribution",
                        e.target.value
                      );
                    }}
                  />
                </label>
                <button
                  onClick={() => {
                    handleDeleteExperience(experienceId, contributionId);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                handleAddExperience(experienceId, "contribution");
              }}
            >
              Add Contribution
            </button>
            <label>
              Location
              <input
                type="text"
                value={experience[experienceId].location}
                onChange={(e) => {
                  handleChangeExperience(
                    experienceId,
                    "location",
                    e.target.value
                  );
                }}
              />
            </label>
            <button
              onClick={() => {
                handleDeleteExperience("root", experienceId);
              }}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            handleAddExperience("root", "experience");
          }}
        >
          Add Experience
        </button>
      </div>
    </section>
  );
}
