import { useState } from "react";
import PickDateTime from "./components/PickDateTime.jsx";
import TimeShow from "./components/TimeShow.jsx";
import dateFormat from "dateformat";

function App() {
  const d = new Date();
  const [time, setTime] = useState(d.getHours() + ":" + d.getMinutes());
  const [date, setDate] = useState(new Date());
  const [timer, setTimer] = useState("1234");

  const StartTimer = () => {
    const DateTime = new Date(
      dateFormat(date, "yyyy-mm-dd") + `T` + time + ":00"
    );
    const UtcDateTime = Date.UTC(
      DateTime.getUTCFullYear(),
      DateTime.getUTCMonth(),
      DateTime.getUTCDate(),
      DateTime.getUTCHours(),
      DateTime.getUTCMinutes(),
      DateTime.getUTCSeconds()
    );
    const UtcDateTimeNow = Date.now();
    const countdownDuration = UtcDateTime - UtcDateTimeNow;

    setTimer(countdownDuration);
  };

  return (
    <div className="bg-blue-700 h-screen overflow-hidden px-5 mx-4 my-1 flex items-center justify-center flex-col gap-10">
      <PickDateTime
        time={time}
        setTime={setTime}
        date={date}
        setDate={setDate}
        StartTimer={StartTimer}
      />
      <TimeShow timer={timer} />
    </div>
  );
}

export default App;
