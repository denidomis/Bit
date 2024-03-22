import { useEffect, useRef } from "react";
import { savePc } from "../../utils/api/pcService";
import { useNavigate } from "react-router-dom";

export default function AddPcForm() {
  console.log("Komponentas persikrove");
  const navigate = useNavigate();

  const cpuInputRef = useRef(null);
  const gpuInputRef = useRef(null);
  const ramTypeInputRef = useRef(null);
  const ramSpeedInputRef = useRef(null);
  const ramAmountInputRef = useRef(null);
  const computerTypeInputRef = useRef(null);
  const pcNameInputRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    cpuInputRef.current.focus();
    cpuInputRef.current.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        gpuInputRef.current.focus();
      }
    });
  }, []);

  function registerNewPc(e) {
    e.preventDefault();
    if (e.pageX === 0 && e.pageY === 0) return;
    const selectedFile = fileInputRef.current.files[0].name;
    const newPcObject = {
      pc_name: pcNameInputRef.current.value,
      processor: cpuInputRef.current.value,
      graphics_card: gpuInputRef.current.value,
      ram_type: ramTypeInputRef.current.value,
      ram_speed: ramSpeedInputRef.current.value + " MHz",
      amount_of_ram: ramAmountInputRef.current.value + " GB",
      computer_type: computerTypeInputRef.current.value,
      pc_image: selectedFile,
    };

    console.log(newPcObject);
    savePc(newPcObject, (response) => {
      if (response.status) {
        fileInputRef.current.files[0].mv("/pc-images/");
        navigate("/");
      } else {
        alert("Pridejimas prie duomenu bazes buvo nesekmingas");
      }
    });
  }
  return (
    <div className="bg-slate-300 w-[100vw] h-[100vh] flex justify-center items-center auth-bg">
      <div className="w-4/5 min-h-[400px] max-w-[1000px] bg-blue-200 bg-opacity-80 p-4 rounded-md">
        <h1 className="text-xl font-bold">Add New PC Form</h1>
        <hr className="mb-4" />

        <form>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">PC Name</span>
              <input
                ref={pcNameInputRef}
                type="text"
                placeholder="Acer"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">
                Processor (CPU)
              </span>
              <input
                ref={cpuInputRef}
                type="text"
                placeholder="Processor"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">
                Graphics card (GPU)
              </span>
              <input
                ref={gpuInputRef}
                type="text"
                placeholder="Graphics card"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">Ram Type</span>
              <select
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
                ref={ramTypeInputRef}
              >
                <option>DDR</option>
                <option>DDR2</option>
                <option>DDR3</option>
                <option>DDR4</option>
                <option>DDR5</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">
                Ram speed (MHZ)
              </span>
              <input
                ref={ramSpeedInputRef}
                type="number"
                placeholder="Ram speed (MHZ)"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">
                Ram amount (MB)
              </span>
              <input
                ref={ramAmountInputRef}
                type="number"
                placeholder="Ram amount (MB)"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">
                Computer type
              </span>
              <select
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
                ref={computerTypeInputRef}
              >
                <option>Macbook</option>
                <option>Laptop</option>
                <option>Desktop Computer</option>
              </select>
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="w-1/5 inline-block select-none">PC Image</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="outline-none border w-4/5 px-2 py-1 rounded-md"
              />
            </label>
          </div>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 rounded text-white px-6 py-1 mt-4"
            onClick={(e) => registerNewPc(e)}
          >
            Register new PC
          </button>
        </form>
      </div>
    </div>
  );
}
