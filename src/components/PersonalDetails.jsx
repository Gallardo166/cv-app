import { useState } from "react";

export default function PersonalDetails({ personalDetails, handleChangePersonalDetails }) {
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
        className={'personal-details-inputs' + (!isShown ? ' hidden' : '')}
      >
        <label htmlFor='full-name'>Full Name <span className="required">required</span></label>
        <input 
          id='full-name' 
          type='text'
          value={personalDetails.fullName}
          onChange={(e) => {
            handleChangePersonalDetails('fullName', e.target.value);
          }}
        />
        <label htmlFor='phone-number'>Phone Number <span className="required">required</span></label>
        <input 
          id='phone-number' 
          type='number' 
          value={personalDetails.phoneNumber}
          onChange={(e) => {
            handleChangePersonalDetails('phoneNumber', e.target.value);
          }}
        />
        <label htmlFor='email'>Email <span className="required">required</span></label>
        <input 
          id='email' 
          type='email' 
          value={personalDetails.email}
          onChange={(e) => {
            if (e.target.value === '') return;
            handleChangePersonalDetails('email', e.target.value);
          }}
        />
        <label htmlFor='linkedin'>LinkedIn Link <span className="recommended">recommended</span></label>
        <input 
          id='linkedin' 
          type='text' 
          value={personalDetails.linkedIn}
          onChange={(e) => {
            handleChangePersonalDetails('linkedIn', e.target.value);
          }}
        />
        <label htmlFor='github'>GitHub Link <span className="recommended">recommended</span></label>
        <input 
          id='github' 
          type='text' 
          value={personalDetails.gitHub}
          onChange={(e) => {
            handleChangePersonalDetails('gitHub', e.target.value);
          }}
        />
      </div>
    </section>
  )
}