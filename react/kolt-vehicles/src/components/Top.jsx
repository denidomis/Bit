import Button from "./Button";

export default function Top({
  onShowFreeClick,
  onShowBusyClick,
  onShowFastestClick,
  onShowSlowestClick,
  onResetFiltersClick,
}) {
  const handleShowFree = () => {
    if (onShowFreeClick) {
      onShowFreeClick();
    }
  };

  const handleShowBusy = () => {
    if (onShowBusyClick) {
      onShowBusyClick();
    }
  };

  const handleShowFastest = () => {
    if (onShowFastestClick) {
      onShowFastestClick();
    }
  };

  const handleShowSlowest = () => {
    if (onShowSlowestClick) {
      onShowSlowestClick();
    }
  };

  const handleResetFiltersClick = () => {
    if (onResetFiltersClick) {
      onResetFiltersClick();
    }
  };

  return (
    <div className="container p-4 mx-auto bg-blue-300 min-h-[400px]">
      <h2 className="text-center my-20 text-xl font-bold">
        Paspirtuko pridėjimas
      </h2>
      <div className="flex gap-4 w-4/5 justify-center mx-auto">
        <input
          type="text"
          className="rounded px-2 py-1 outline-2 outline-sky-400 w-1/4"
          placeholder="Paspirtuko modelis"
        />
        <input
          type="text"
          className="rounded px-2 py-1 outline-2 outline-sky-400 w-1/4"
          placeholder="Paspirtuko rida"
        />
        <Button text="Pridėti" color="blue" />
      </div>
      <div className="flex justify-center mt-20 gap-4">
        <Button text="Rodyti laisvus" color="green" onClick={handleShowFree} />
        <Button color="red" text="Rodyti užimtus" onClick={handleShowBusy} />
        <Button
          color="#40376E"
          text="Rikiuoti nuo Greitesnių"
          onClick={handleShowFastest}
        />
        <Button
          color="#462849"
          text="Rikiuoti nuo Lėtesnių"
          onClick={handleShowSlowest}
        />
        <Button
          color="Black"
          text="Pašalinti filtrus"
          onClick={handleResetFiltersClick}
        />
      </div>
    </div>
  );
}
