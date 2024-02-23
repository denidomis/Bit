import { useState } from "react";
import PickDateTime from "./components/PickDateTime.jsx";
import TimeShow from "./components/TimeShow.jsx";
import dateFormat from "dateformat";

function App() {
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const d = new Date();
  const [time, setTime] = useState(
    addZero(d.getHours()) + ":" + addZero(d.getMinutes() + 1)
  );
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
    <div className="bg-blue-700 h-screen px-5 flex justify-around flex-col gap-10">
      <div className="h-full flex items-center justify-evenly flex-col gap-10">
        <PickDateTime
          time={time}
          setTime={setTime}
          date={date}
          setDate={setDate}
          StartTimer={StartTimer}
        />
        <h1 className="text-white font-bold">
          <TimeShow timer={timer} />
        </h1>
      </div>
    </div>
  );
}

export default App;
