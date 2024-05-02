import { useState } from "react";
import ModeToggler from "./components/ModeToggler";
import Content from "./components/Content";
import Customize from "./components/Customize";
import Document from "./components/Document";
import { initialPersonalDetails, initialEducation, initialExperience } from "./components/data"


function App() {
  const [mode, setMode] = useState('content');
  const [personalDetails, setPersonalDetails] = useState(initialPersonalDetails);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);

  function handleChangePersonalDetails(property, value) {
    const newPersonalDetails = {...personalDetails, [property]: value};
    setPersonalDetails(newPersonalDetails);
  }

  function handleChangeEducation(educationId, property, value) {
    const newEducation = [];

    education.forEach((education) => {
      if (educationId !== education.id) {
        newEducation.push(education);
        return;
      }
      newEducation.push({...education, [property]: value});
    })
    setEducation(newEducation);
  }

  function handleChangeExperience() {
  
  }

  function handleChangeMode(targetMode) {
    if (targetMode !== mode) {
      setMode(targetMode);
    }
  }

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <ModeToggler mode={mode} onChange={handleChangeMode}/>
      {mode === "content" 
        ? <Content 
            personalDetails={personalDetails} 
            education={education}
            experience={experience}
            handleChangePersonalDetails={handleChangePersonalDetails} 
            handleChangeEducation={handleChangeEducation} 
            handleChangeExperience={handleChangeExperience} 
          /> 
        : <Customize />}
      <Document 
        personalDetails={personalDetails}
        education={education}
        experience={experience}
      />
    </div>
  );
}

export default App;
