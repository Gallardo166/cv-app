import { v4 as uuid } from 'uuid';

const initialPersonalDetails = {
  fullName: 'Full Name',
  phoneNumber: 11111,
  email: 'email@gmail.com',
  linkedIn: 'linkedin.com/in/username/',
  gitHub: 'github.com/username',
};

const initialEducation = [
  {id: uuid(), institution: 'Institution', degree:'Bachelor of Studies', startDate: '1/2020', endDate: '11/2023'},
];

const initialExperience = [
  {id: uuid(), organization: 'Organization', startDate: '5/2024', endDate: 'present'},
]

export {initialPersonalDetails, initialEducation, initialExperience};