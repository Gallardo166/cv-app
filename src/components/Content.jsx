import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/Content.css";

export default function Content({
  personalDetails,
  education,
  experience,
  handleChangePersonalDetails,
  handleChangeEducation,
  handleDeleteEducation,
  handleAddEducation,
  handleChangeExperience,
  handleDeleteExperience,
  handleAddExperience,
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
    </div>
  );
}
