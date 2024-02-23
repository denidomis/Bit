import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import Confetti from "react-confetti";

export default function TimeShow({ timer }) {
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    setKey(Date.now());
  }, [timer]);

  const Completionist = () => {
    return (
      <Confetti
        width={window.innerWidth || 300}
        height={window.innerHeight || 200}
        numberOfPieces={2000}
      />
    );
  };

  return (
    <div className="timer">
      <Countdown key={key} date={Date.now() + timer}>
        <Completionist />
      </Countdown>
    </div>
  );
}
