import Top from "./components/Top.jsx";
import Middle from "./components/Middle.jsx";
import Bottom from "./components/Bottom.jsx";
import { useEffect, useState } from "react";

export default function Layout() {
  const [originalScooters, setOriginalScooters] = useState([]);
  const [scooter, setScooters] = useState([]);

  useEffect(() => {
    fetch("./paspirtukai.json")
      .then((resp) => resp.json())
      .then((data) => {
        setOriginalScooters(data);
        setScooters(data);
      });
  }, []);

  const handleShowFreeClick = () => {
    setScooters(originalScooters.filter((s) => s.isBusy));
  };

  const handleShowBusyClick = () => {
    setScooters(originalScooters.filter((s) => !s.isBusy));
  };

  const handleShowFastestClick = () => {
    const sortedScooters = [...scooter].sort((a, b) => b.ride - a.ride);
    setScooters(sortedScooters);
  };

  const handleShowSlowestClick = () => {
    const sortedScooters = [...scooter].sort((a, b) => a.ride - b.ride);
    setScooters(sortedScooters);
  };

  const handleResetFiltersClick = () => {
    setScooters(originalScooters);
  };

  return (
    <div>
      <Top
        onShowFreeClick={handleShowFreeClick}
        onShowBusyClick={handleShowBusyClick}
        onShowFastestClick={handleShowFastestClick}
        onShowSlowestClick={handleShowSlowestClick}
        onResetFiltersClick={handleResetFiltersClick}
      />
      <Middle scooter={scooter} />
      <Bottom />
    </div>
  );
}
