import { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

export default function App() {
  const [vardas, setVardas] = useState("");
  const [showIndex, setShowIndex] = useState(1);
  const piniguKiekis = 10;

  function gautiDuomenis(name) {
    setVardas(name);
  }

  return (
    <div className="bg-yellow">
      <h1>Parent</h1>
      <p>Vardas: {vardas}</p>
      <button onClick={() => setShowIndex(1)}>Component1</button>
      <button onClick={() => setShowIndex(2)}>Component2</button>

      <div className={showIndex === 1 ? "" : "hidden"}>
        <Component1 money={piniguKiekis} perduotiDuomenis={gautiDuomenis} />
      </div>
      <div className={showIndex === 2 ? "" : "hidden"}>
        <Component2 cash={piniguKiekis} prizoLaimetoja={vardas} />
      </div>
    </div>
  );
}
