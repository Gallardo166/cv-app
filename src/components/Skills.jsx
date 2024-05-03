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
      <div className="header">
        <h2>Skills</h2>
        <button onClick={handleClick}>&#8964;</button>
      </div>
      <div className={"skills-container" + (!isShown ? " hidden" : "")}>
        {skills.root.childIds.map((categoryId) => (
          <div className="skills-inputs" key={categoryId}>
            <label>
              <p>Category <span className="required">required</span></p>
              <input
                type="text"
                value={skills[categoryId].category}
                onChange={(e) => {
                  handleChangeSkills(
                    categoryId,
                    "category",
                    e.target.value
                  );
                }}
              />
            </label>
            <p>Skills <span className="required">required</span></p>
            {skills[categoryId].childIds.map((skillId) => (
              <div 
                className="skill-container"
                key={skillId}
              >
                <label>
                  <input
                    type="text"
                    value={skills[skillId].skill}
                    onChange={(e) => {
                      handleChangeSkills(
                        skillId,
                        "skill",
                        e.target.value
                      );
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
              Delete
            </button>
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
