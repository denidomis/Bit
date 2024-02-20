import { useState } from "react";
import * as ReactDOM from "react-dom/client";

export default function Form5() {
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("10");
  const [color, setColor] = useState("#000000");
  const [currentBox, setCurrentBox] = useState({});

  return (
    <div>
      <hr />
      <div>
        <button
          onClick={() => {
            const existingBox = document.querySelector(".makeDiv > div");
            if (existingBox) {
              existingBox.remove();
            }
            setCurrentBox({
              width: width + "px",
              height: height + "px",
              color: color,
            });
            const newBox = document.createElement("div");
            newBox.style.width = width + "px";
            newBox.style.height = height + "px";
            newBox.style.background = color;
            document.querySelector(".makeDiv").appendChild(newBox);
          }}
        >
          Pridėti
        </button>
        <button
          onClick={() => {
            const saveDiv = document.querySelector(".saveDiv");
            const newBox = document.createElement("div");
            newBox.style.width = currentBox.width;
            newBox.style.height = currentBox.height;
            newBox.style.background = currentBox.color;

            saveDiv.appendChild(newBox);
          }}
        >
          Išsaugoti
        </button>
        <input
          type="range"
          id="width"
          min="10"
          max="200"
          value={width}
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
        <label for="width">Width</label>
        <input
          type="range"
          id="height"
          min="10"
          max="200"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <label for="height">Height</label>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
      </div>
      <div className="showDivs">
        <div className="makeDiv"></div>
        <div className="saveDiv"></div>
      </div>
    </div>
  );
}
