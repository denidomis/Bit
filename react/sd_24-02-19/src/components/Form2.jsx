import { useState } from "react";

export default function Form2() {
  const [cats, setCats] = useState(getCatsFromLOcalStorage);
  const [newCatName, setNewCatName] = useState("");
  const [weight, setWeight] = useState("");

  function getCatsFromLOcalStorage() {
    return JSON.parse(localStorage.getItem("cats") || "[]");
  }
  return (
    <div>
      <input
        type="text"
        value={newCatName}
        onChange={(e) => {
          setNewCatName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Svoris (kg)"
        min={0}
        max={40}
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          const newArray = [...cats, { name: newCatName, weight: weight }];
          localStorage.setItem("cats", JSON.stringify(newArray));
          setCats(newArray);
          setWeight("");
          setNewCatName("");
        }}
      >
        submit
      </button>

      <ul>
        {cats.map((cat, index) => (
          <li key={index}>
            {cat.name} {cat.weight}kg
          </li>
        ))}
      </ul>
    </div>
  );
}
