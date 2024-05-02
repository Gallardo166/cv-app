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
  handleChangeExperience 
}) {
  return (
    <div className="content">
      <PersonalDetails personalDetails={personalDetails} handleChangePersonalDetails={handleChangePersonalDetails} />
      <Education education={education} handleChangeEducation={handleChangeEducation} />
      <Experience experience={experience} handleChangeExperience={handleChangeExperience} />
    </div>
  )
}