import Top from "./components/Top.jsx";
import Middle from "./components/Middle.jsx";
import Bottom from "./components/Bottom.jsx";
import { useEffect, useState } from "react";

export default function Layout() {
  const [originalScooters, setOriginalScooters] = useState([]);
  const [filteredScooters, setFilteredScooters] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  useEffect(() => {
    const storedScooters = localStorage.getItem("scootersData");
    if (storedScooters) {
      const parsedScooters = JSON.parse(storedScooters);
      setOriginalScooters(parsedScooters);
      setFilteredScooters(parsedScooters);
      if (parsedScooters.length > 0) {
        const maxId = Math.max(...parsedScooters.map((scooter) => scooter.id));
        setIdCounter(maxId + 1);
      }
    }
  }, []);

  const handleShowFreeClick = () => {
    const filtered = originalScooters.filter((s) => s.isBusy);
    setFilteredScooters(filtered);
  };

  const handleShowBusyClick = () => {
    const filtered = originalScooters.filter((s) => !s.isBusy);
    setFilteredScooters(filtered);
  };

  const handleShowFastestClick = () => {
    const sorted = [...filteredScooters].sort((a, b) => b.ride - a.ride);
    setFilteredScooters(sorted);
  };

  const handleShowSlowestClick = () => {
    const sorted = [...filteredScooters].sort((a, b) => a.ride - b.ride);
    setFilteredScooters(sorted);
  };

  const handleResetFiltersClick = () => {
    setFilteredScooters(originalScooters);
  };

  const updateOriginalScooters = (scooters) => {
    setOriginalScooters(scooters);
    if (JSON.stringify(filteredScooters) === JSON.stringify(originalScooters)) {
      setFilteredScooters(scooters);
    }
  };

  const updateFilteredScooters = (scooters) => {
    setFilteredScooters(scooters);
  };

  const getRandom = (min, max, precision) => {
    const factor = Math.pow(10, precision);
    const randomNum =
      Math.floor(Math.random() * (max - min + 1) * factor) / factor + min;
    return parseFloat(randomNum.toFixed(precision));
  };

  const handleStatusChange = (scooterId, newStatus) => {
    const updatedScooters = originalScooters.map((scooter) => {
      if (scooter.id === scooterId) {
        if (newStatus === true) {
          const date3 = Date.now();
          const rida = scooter.ride - getRandom(1, scooter.ride, 2);
          return {
            ...scooter,
            isBusy: newStatus,
            lastUseTime: date3.valueOf(),
            ride: rida.toFixed(2),
          };
        } else {
          return { ...scooter, isBusy: newStatus };
        }
      }
      return scooter;
    });

    updateOriginalScooters(updatedScooters);

    localStorage.setItem("scootersData", JSON.stringify(updatedScooters));
  };

  return (
    <div>
      <Top
        onShowFreeClick={handleShowFreeClick}
        onShowBusyClick={handleShowBusyClick}
        onShowFastestClick={handleShowFastestClick}
        onShowSlowestClick={handleShowSlowestClick}
        onResetFiltersClick={handleResetFiltersClick}
        updateOriginalScooters={updateOriginalScooters}
        updateFilteredScooters={updateFilteredScooters}
        idCounter={idCounter}
        setIdCounter={setIdCounter}
      />
      <Middle scooter={filteredScooters} onStatusChange={handleStatusChange} />
      <Bottom />
    </div>
  );
}
