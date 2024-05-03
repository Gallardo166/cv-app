import { useState } from "react";
import ModeToggler from "./components/ModeToggler";
import Content from "./components/Content";
import Customize from "./components/Customize";
import Document from "./components/Document";
import {
  initialPersonalDetails,
  initialEducation,
  initialExperience,
  initialSkills,
} from "./components/data";
import { v4 as uuid } from "uuid";
import "./App.css";

function App() {
  const [mode, setMode] = useState("content");
  const [personalDetails, setPersonalDetails] = useState(
    initialPersonalDetails
  );
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);
  const [skills, setSkills] = useState(initialSkills);
  const [styles, setStyles] = useState({
    fontFamily: "times new roman",
  });

  function handleChangePersonalDetails(property, value) {
    const newPersonalDetails = { ...personalDetails, [property]: value };
    setPersonalDetails(newPersonalDetails);
  }

  function handleChangeEducation(educationId, property, value) {
    const newEducation = [];

    education.forEach((education) => {
      if (educationId !== education.id) {
        newEducation.push(education);
        return;
      }
      newEducation.push({ ...education, [property]: value });
    });
    setEducation(newEducation);
  }

  function handleDeleteEducation(educationId) {
    const newEducation = education.filter(
      (education) => education.id !== educationId
    );
    setEducation(newEducation);
  }

  function handleAddEducation() {
    const newEducation = [...education];
    newEducation.push({
      id: uuid(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
    setEducation(newEducation);
  }

  function handleChangeExperience(id, property, value) {
    const newExperience = {
      ...experience,
      [id]: { ...experience[id], [property]: value },
    };
    setExperience(newExperience);
  }

  function handleDeleteExperience(parentId, childId) {
    const newExperience = {
      ...experience,
      [parentId]: {
        ...experience[parentId],
        childIds: experience[parentId].childIds.filter((id) => id !== childId),
      },
    };
    setExperience(newExperience);
  }

  function handleAddExperience(parentId, type) {
    let newChild;
    const newId = uuid();
    if (type === "contribution") {
      newChild = {
        id: newId,
        contribution: "",
      };
    } else {
      newChild = {
        id: newId,
        organization: "",
        startDate: "",
        endDate: "",
        childIds: [],
      };
    }

    const newExperience = {
      ...experience,
      [parentId]: {
        ...experience[parentId],
        childIds: experience[parentId].childIds.concat(newId),
      },
      [newId]: newChild,
    };
    setExperience(newExperience);
  }

  function handleChangeSkills(id, property, value) {
    const newSkills = {
      ...skills,
      [id]: { ...skills[id], [property]: value },
    };
    setSkills(newSkills);
  }

  function handleDeleteSkills(parentId, childId) {
    const newSkills = {
      ...skills,
      [parentId]: {
        ...skills[parentId],
        childIds: skills[parentId].childIds.filter((id) => id !== childId),
      },
    };
    setSkills(newSkills);
  }

  function handleAddSkills(parentId, type) {
    let newChild;
    const newId = uuid();
    if (type === "skill") {
      newChild = {
        id: newId,
        skill: "",
      };
    } else {
      newChild = {
        id: newId,
        category: "",
        childIds: [],
      };
    }

    const newSkills = {
      ...skills,
      [parentId]: {
        ...skills[parentId],
        childIds: skills[parentId].childIds.concat(newId),
      },
      [newId]: newChild,
    };
    setSkills(newSkills);
  }

  function handleChangeMode(targetMode) {
    if (targetMode !== mode) {
      setMode(targetMode);
    }
  }

  function handleChangeStyles(property, value) {
    if (value !== styles[property]) {
      const newStyles = { ...styles, [property]: value };
      setStyles(newStyles);
    }
  }

  return (
    <div className="app">
      <h1 className="title">CV Builder</h1>
      <ModeToggler mode={mode} onChange={handleChangeMode} />
      {mode === "content" ? (
        <Content
          personalDetails={personalDetails}
          education={education}
          experience={experience}
          skills={skills}
          handleChangePersonalDetails={handleChangePersonalDetails}
          handleChangeEducation={handleChangeEducation}
          handleDeleteEducation={handleDeleteEducation}
          handleAddEducation={handleAddEducation}
          handleChangeExperience={handleChangeExperience}
          handleDeleteExperience={handleDeleteExperience}
          handleAddExperience={handleAddExperience}
          handleChangeSkills={handleChangeSkills}
          handleDeleteSkills={handleDeleteSkills}
          handleAddSkills={handleAddSkills}
        />
      ) : (
        <Customize handleChangeStyles={handleChangeStyles} />
      )}
      <Document
        styles={styles}
        personalDetails={personalDetails}
        education={education}
        experience={experience}
        skills={skills}
      />
    </div>
  );
}

export default App;
