import { useState } from "react";

export default function Education({ education, handleChangeEducation }) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <section>
      <div
        className='header'
      >
        <h2>Education</h2>
        <button onClick={handleClick}>&#8964;</button>
      </div>
      <div
        className={'content' + (!isShown ? ' hidden' : '')}
      >
        {education.map((education) => (
          <div className='education' key={education.id}>
            <label>
              Institution
              <input 
                type='text' 
                value={education.institution}
                onChange={(e) => {
                  handleChangeEducation(education.id, 'institution', e.target.value);
                }}
              />
            </label>
            <label>
              Start Date
              <input 
                type='text' 
                value={education.startDate} 
                onChange={(e) => {
                  handleChangeEducation(education.id, 'startDate', e.target.value);
                }}
              />
            </label>
            <label>
              End Date
              <input 
                type='text' 
                value={education.endDate} 
                onChange={(e) => {
                  handleChangeEducation(education.id, 'endDate', e.target.value);
                }}/>
            </label>
          </div>
        ))}
      </div>
    </section>
  )
}