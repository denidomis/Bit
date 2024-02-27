import Button from "./Button";
import { useState, useEffect } from "react";

export default function Top({
  onShowFreeClick,
  onShowBusyClick,
  onShowFastestClick,
  onShowSlowestClick,
  onResetFiltersClick,
  updateOriginalScooters,
  updateFilteredScooters,
  idCounter,
  setIdCounter,
}) {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [ride, setRide] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");

  useEffect(() => {
    const storedScooters = localStorage.getItem("scootersData");
    if (storedScooters) {
      const parsedScooters = JSON.parse(storedScooters);
      if (parsedScooters.length > 0) {
        const maxId = Math.max(...parsedScooters.map((scooter) => scooter.id));
        setIdCounter(maxId + 1);
      }
    }
  }, []);

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

  const handleAddButtonClick = () => {
    const newScooter = {
      id: idCounter,
      title: model,
      hourlyPrice: price,
      ride: ride,
      isBusy: false,
      registrationCode: registrationCode,
    };

    updateOriginalScooters((prevScooters) => [...prevScooters, newScooter]);
    updateFilteredScooters((prevScooters) => [...prevScooters, newScooter]);

    const updatedScooters = JSON.stringify([
      ...JSON.parse(localStorage.getItem("scootersData") || "[]"),
      newScooter,
    ]);
    localStorage.setItem("scootersData", updatedScooters);

    setIdCounter((prevId) => prevId + 1);
    setModel("");
    setRide("");
  };

  return (
    <div className="container p-4 mx-auto bg-blue-300 min-h-[400px]">
      <h2 className="text-center my-20 text-xl font-bold">
        Paspirtuko pridėjimas
      </h2>
      <div className="flex gap-4 w-4/5 justify-center mx-auto">
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="rounded px-2 py-1 outline-2 outline-sky-400 w-1/4"
          placeholder="Paspirtuko modelis"
        />
        <input
          type="text"
          value={registrationCode}
          onChange={(e) => setRegistrationCode(e.target.value)}
          className="rounded px-2 py-1 outline-2 outline-sky-400 w-1/4"
          placeholder="Paspirtuko Valst. Nr."
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="rounded px-2 py-1 outline-2 outline-sky-400 w-1/4"
          placeholder="Paspirtuko kaina/h"
        />
        <input
          type="number"
          value={ride}
          onChange={(e) => setRide(e.target.value)}
          className="rounded px-2 py-1 outline-2 outline-sky-400 w-1/4"
          placeholder="Paspirtuko rida"
        />
        <Button text="Pridėti" color="blue" onClick={handleAddButtonClick} />
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
