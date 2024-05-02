import { useState } from "react";

export default function Education() {
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
        <label>Institution</label>
        <input type='text' />
        <label>Start year</label>
        <input type='number' />
        <label>End year</label>
        <button>Add</button>
      </div>
    </section>
  )
}