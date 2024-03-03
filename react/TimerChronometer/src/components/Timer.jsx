import { useState, useRef } from "react";

export default function Timer() {
  const [timerInput, setTimerInput] = useState("00:05:00");
  const [initialInput, setInitialInput] = useState("00:05:00");
  const [timerValue, setTimerValue] = useState(300);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setInitialInput(timerInput);
      setTimerValue(getTotalSeconds(timerInput));
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTimerValue((prevValue) => {
          if (prevValue === 0) {
            clearInterval(timerRef.current);
            setRunning(false);
            return 0;
          }
          return prevValue - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setRunning(false);
      setTimerInput(formatTime(timerValue));
    }
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTimerInput("00:05:00");
    setInitialInput("00:05:00");
    setTimerValue(300);
  };

  const getTotalSeconds = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-around flex-col h-96">
      <h1 className="font-bold text-4xl">Timer</h1>
      <div>
        {!running ? (
          <input
            className="bg-black size-50 text-4xl border-none outline-none focus:ring-0"
            value={timerInput}
            type="time"
            step={1}
            onChange={(e) => {
              setTimerInput(e.target.value);
            }}
          />
        ) : (
          <p className="font-bold text-4xl">{formatTime(timerValue)}</p>
        )}
      </div>
      <div className=" size-30">
        <button className=" bg-blue-400 rounded p-2 mr-2" onClick={startTimer}>
          {running ? "Pause" : "Start"}
        </button>
        <button className=" bg-gray-300 rounded p-2" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}
