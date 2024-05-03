import { useState } from "react";

export default function Skills({
  skills,
  handleChangeSkills,
  handleDeleteSkills,
  handleAddSkills,
}) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <section>
      <div className="header" onClick={handleClick}>
        <h2>Skills</h2>
        <h2 className={"arrow" + (!isShown ? " down" : " up")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>chevron-down</title>
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </h2>
      </div>
      <div className={"skills-container" + (!isShown ? " hidden" : "")}>
        {skills.root.childIds.map((categoryId) => (
          <div className="skills-inputs" key={categoryId}>
            <label>
              <p>
                Category <span className="recommended">recommended</span>
              </p>
              <input
                type="text"
                value={skills[categoryId].category}
                onChange={(e) => {
                  handleChangeSkills(categoryId, "category", e.target.value);
                }}
              />
            </label>
            <p>
              Skills <span className="recommended">recommended</span>
            </p>
            {skills[categoryId].childIds.map((skillId) => (
              <div className="skill-container" key={skillId}>
                <label>
                  <input
                    type="text"
                    value={skills[skillId].skill}
                    onChange={(e) => {
                      handleChangeSkills(skillId, "skill", e.target.value);
                    }}
                  />
                </label>
                <button
                  onClick={() => {
                    handleDeleteSkills(categoryId, skillId);
                  }}
                >
                  Delete
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                handleAddSkills(categoryId, "skill");
              }}
            >
              Add Skill
            </button>
            <button
              onClick={() => {
                handleDeleteSkills("root", categoryId);
              }}
            >
              Delete Category
            </button>
            <hr></hr>
          </div>
        ))}
        <button
          onClick={() => {
            handleAddSkills("root", "category");
          }}
        >
          Add Category
        </button>
      </div>
    </section>
  );
}
