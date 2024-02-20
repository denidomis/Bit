import { useState } from "react";

export default function Form3() {
  const [first, setFirst] = useState(100);
  return (
    <div>
      <div>
        <span>Pirmas skaičius</span>
        <input
          type="number"
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
      </div>
      <div>
        <span>Antras skaičius</span>
        <input
          type="number"
          value={first / 2}
          onChange={(e) => {
            setFirst(e.target.value * 2);
          }}
        />
      </div>
      <div>
        <span>Trecias skaičius</span>
        <input
          type="number"
          value={+(first / 2) + +first}
          onChange={(e) => {
            setFirst(e.target.value / 2);
          }}
        />
      </div>
    </div>
  );
}
