import dateFormat from "dateformat";

export default function PickDateTime({
  date,
  setDate,
  setTime,
  time,
  StartTimer,
}) {
  return (
    <div className="flex gap-5 items-center">
      <div>
        <label className="text-white mx-2" htmlFor="date">
          Data
        </label>
        <input
          className="bg-black border-none rounded-md text-white"
          name="date"
          type="date"
          value={dateFormat(date, "yyyy-mm-dd")}
          onChange={(e) => {
            setDate(new Date(e.target.value));
          }}
        />
      </div>
      <div>
        <label className="text-white mx-2" htmlFor="time">
          Laikas
        </label>
        <input
          className="bg-black border-none rounded-md text-white"
          name="time"
          type="time"
          value={time}
          min="00:00"
          max="23:59"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
      </div>
      <button
        onClick={StartTimer}
        className="text-white bg-cyan-900 p-2 mx-2 rounded-md"
      >
        Pradėti
      </button>
    </div>
  );
}
