import { useState } from "react";

export default function Component1({ money, perduotiDuomenis }) {
  const vardas = "Stasė";
  const [count, setCount] = useState(0);

  return (
    <div className="bg-lime">
      <h3>Component1</h3>
      <p>Pinigu kiekis: {money}</p>
      <button onClick={() => perduotiDuomenis(vardas)}>
        Issiusti duomenis
      </button>

      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Prideti
      </button>
    </div>
  );
}
