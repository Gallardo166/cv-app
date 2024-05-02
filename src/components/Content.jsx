import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";
import "../styles/Content.css";

export default function Content({ data, handleChangeData }) {
  return (
    <div className="content">
      <PersonalDetails data={data} handleChangeData={handleChangeData} />
      <Education data={data} handleChangeData={handleChangeData} />
      <Experience data={data} handleChangeData={handleChangeData} />
    </div>
  )
}