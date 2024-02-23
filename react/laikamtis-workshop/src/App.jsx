import PickDateTime from "./components/PickDateTime.jsx";
import TimeShow from "./components/TimeShow.jsx";
import { useState } from "react";

function App() {
  const [time, setTime] = useState("09:00");
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-blue-700 container h-screen px-5 mx-4 my-1 flex items-center justify-center flex-col gap-10">
      <PickDateTime
        time={time}
        setTime={setTime}
        date={date}
        setDate={setDate}
      />
      <TimeShow date={date} time={time} />
    </div>
  );
}

export default App;
