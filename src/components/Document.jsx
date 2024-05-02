export default function Document({ 
  personalDetails, 
  education, 
  experience,
}) {
  return (
    <div className="document">
      <h1>{personalDetails.fullName}</h1>
      <h3>{personalDetails.phoneNumber}</h3>
      <h3>{personalDetails.email}</h3>
      {personalDetails.linkedIn ? <h3>{personalDetails.linkedIn}</h3> : null}
      {personalDetails.gitHub ? <h3>{personalDetails.gitHub}</h3> : null}
      {education.map((education) => (
        <div 
          key={education.id}
        >
          <h3>{education.institution}</h3>
          <h3>{education.startDate + ' - ' + education.endDate}</h3>
        </div>
      ))}
    </div>
  )
}