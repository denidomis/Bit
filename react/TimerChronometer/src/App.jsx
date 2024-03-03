import { useState } from "react";
import Timer from "./components/Timer";
import Stopwatch from "./components/Stopwatch";

export default function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-black text-white h-screen overflow-hidden">
      <div className="flex space-x-4">
        <button
          onClick={() => handleTabClick("tab1")}
          className={`px-4 py-2 ${
            activeTab === "tab1"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Timer
        </button>
        <button
          onClick={() => handleTabClick("tab2")}
          className={`px-4 py-2 ${
            activeTab === "tab2"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Stopwatch
        </button>
      </div>
      <div className="h-full">
        <div
          className={`p-4 border ${activeTab === "tab1" ? "block" : "hidden"}`}
        >
          <Timer />
        </div>
        <div
          className={`p-4 border ${activeTab === "tab2" ? "block" : "hidden"}`}
        >
          <Stopwatch />
        </div>
      </div>
    </div>
  );
}
