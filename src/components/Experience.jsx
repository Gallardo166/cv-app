import { useState } from "react";

export default function Experience({ experience, handleChangeExperience }) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  return (
    <section>
      <div
        className='header'
      >
        <h2>Experience</h2>
        <button onClick={handleClick}>&#8964;</button>
      </div>
      <div
        className={'content' + (!isShown ? ' hidden' : '')}
      >
        <label>Organization Name</label>
        <input type='text' />
        <label>Start year</label>
        <input type='number' />
        <label>End year</label>
        <input type='number' />
        <button>Add</button>
      </div>
    </section>
  )
}