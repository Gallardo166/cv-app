import { v4 as uuid } from "uuid";

const initialPersonalDetails = {
  fullName: "Full Name",
  phoneNumber: 11111,
  email: "email@gmail.com",
  linkedIn: "linkedin.com/in/username/",
  gitHub: "github.com/username",
};

const initialEducation = [
  {
    id: uuid(),
    institution: "Institution",
    degree: "Bachelor of Studies",
    startDate: "1/2020",
    endDate: "11/2023",
    location: "Earth",
  },
];

const initialExperience = {
  root: {
    childIds: [1],
  },
  1: {
    id: 1,
    organization: "Organization",
    position: "Employee",
    location: "Earth",
    childIds: [2],
    startDate: "5/2024",
    endDate: "present",
  },
  2: {
    id: 2,
    contribution: "Did this",
  },
};

const initialSkills = {
  root: {
    childIds: [1],
  },
  1: {
    id: 1,
    category: "Languages",
    childIds: [2],
  },
  2: {
    id: 2,
    skill: "JavaScript",
  }
}

export { initialPersonalDetails, initialEducation, initialExperience, initialSkills };
