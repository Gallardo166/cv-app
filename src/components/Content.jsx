import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "../styles/Content.css";

export default function Content({
  personalDetails,
  education,
  experience,
  skills,
  handleChangePersonalDetails,
  handleChangeEducation,
  handleDeleteEducation,
  handleAddEducation,
  handleChangeExperience,
  handleDeleteExperience,
  handleAddExperience,
  handleChangeSkills,
  handleDeleteSkills,
  handleAddSkills,
}) {
  return (
    <div className="content">
      <PersonalDetails
        personalDetails={personalDetails}
        handleChangePersonalDetails={handleChangePersonalDetails}
      />
      <Education
        education={education}
        handleChangeEducation={handleChangeEducation}
        handleDeleteEducation={handleDeleteEducation}
        handleAddEducation={handleAddEducation}
      />
      <Experience
        experience={experience}
        handleChangeExperience={handleChangeExperience}
        handleDeleteExperience={handleDeleteExperience}
        handleAddExperience={handleAddExperience}
      />
      <Skills 
        skills={skills}
        handleChangeSkills={handleChangeSkills}
        handleDeleteSkills={handleDeleteSkills}
        handleAddSkills={handleAddSkills}
      />
    </div>
  );
}
