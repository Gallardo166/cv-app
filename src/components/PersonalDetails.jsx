import { useState } from "react";

export default function PersonalDetails({ data, handleChangeData }) {
  const [isShown, setIsShown] = useState(true);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <section>
      <div
        className='header'
      >
        <h2>Personal Details</h2>
        <button onClick={handleClick}>&#8964;</button>
      </div>
      <div
        className={'content' + (!isShown ? ' hidden' : '')}
      >
        <label htmlFor='full-name'>Full Name</label>
        <input 
          id='full-name' 
          type='text'
          value={data.fullName}
          onChange={(e) => {
            handleChangeData('fullName', e.target.value);
          }}
        />
        <label htmlFor='phone-number'>Phone Number <span>Required</span></label>
        <input 
          id='phone-number' 
          type='number' 
          value={data.phoneNumber}
          onChange={(e) => {
            handleChangeData('phoneNumber', e.target.value);
          }}
        />
        <label htmlFor='email'>Email <span>Required</span></label>
        <input 
          id='email' 
          type='email' 
          value={data.email}
          onChange={(e) => {
            handleChangeData('email', e.target.value);
          }}
        />
        <label htmlFor='linkedin'>LinkedIn Link <span>Recommended</span></label>
        <input 
          id='linkedin' 
          type='text' 
          value={data.linkedIn}
          onChange={(e) => {
            handleChangeData('linkedIn', e.target.value);
          }}
        />
        <label htmlFor='github'>GitHub Link <span>Recommended</span></label>
        <input 
          id='github' 
          type='text' 
          value={data.gitHub}
          onChange={(e) => {
            handleChangeData('gitHub', e.target.value);
          }}
        />
      </div>
    </section>
  )
}