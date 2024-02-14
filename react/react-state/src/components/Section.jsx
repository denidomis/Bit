import { useState } from "react";

function Section() {
  const [countOfClicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(countOfClicks + 1);
    console.log(countOfClicks);
  }

  return (
    <section>
      <p>Count of clicks: {countOfClicks}</p>
      <button onClick={handleClick}>Click me!</button>
    </section>
  );
}

export default Section;
