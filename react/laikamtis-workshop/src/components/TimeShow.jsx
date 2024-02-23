import dateFormat from "dateformat";

export default function TimeShow({ date, time }) {
  function FormatingDate() {
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
    console.log(UtcDateTime);
    const NewDateime = UtcDateTime - UtcDateTimeNow;
    console.log(NewDateime);

    return DateTime;
  }

  function CalcDate(Date) {
    const Year = 1970 - Date.getFullYear();
    const Month = 1 - Date.getMonth();
    const Day = 1 - Date.getDate();
    const Hour = 3 - Date.getHours();
  }

  return (
    <div>
      <h1 className="text-white font-bold" onClick={FormatingDate}>
        Timer: {FormatingDate}
      </h1>
    </div>
  );
}
