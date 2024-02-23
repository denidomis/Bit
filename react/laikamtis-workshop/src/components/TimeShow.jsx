import { useState, useEffect } from "react";
import Countdown from "react-countdown";

export default function TimeShow({ timer }) {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, [timer]);

  const Completionist = () => {
    return <span>You are good to go!</span>;
  };

  return (
    <div>
      <h1 className="text-white font-bold">
        Timer:
        <Countdown key={key} date={Date.now() + timer}>
          <Completionist />
        </Countdown>
      </h1>
    </div>
  );
}
