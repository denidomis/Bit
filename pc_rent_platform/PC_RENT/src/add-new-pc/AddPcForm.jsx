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
  const pcImagesInputRef = useRef(null);

  useEffect(() => {
    console.log("Suveike useEffect");
    cpuInputRef.current.focus();

    const focusGPU = (e) => {
      if (e.key === "Enter") {
        gpuInputRef.current.focus();
        console.log("Suveike event listeneris");
      }
    };

    const element = cpuInputRef.current;

    element.addEventListener("keydown", focusGPU);

    // Cleanup funkcija yra skirta pašalinti dublikuotiems event listeneriams (del strict mode)
    return () => {
      element.removeEventListener("keydown", focusGPU);
    };
  }, []);

  function registerNewPc(e) {
    e.preventDefault();
    if (e.pageX === 0 && e.pageY === 0) return;
    const formData = new FormData();
    formData.append("pc_name", pcNameInputRef.current.value);
    formData.append("processor", cpuInputRef.current.value);
    formData.append("graphics_card", gpuInputRef.current.value);
    formData.append("ram_type", ramTypeInputRef.current.value);
    formData.append("ram_speed", ramSpeedInputRef.current.value);
    formData.append("amount_of_ram", ramAmountInputRef.current.value);
    formData.append("computer_type", computerTypeInputRef.current.value);

    const files = pcImagesInputRef.current.files;
    for (let i = 0; i < files.length; i++) formData.append("files", files[i]);

    savePc(formData, (response) => {
      if (response.status) navigate("/");
      else {
        alert("Pridejimas prie duomenu bazes buvo nesekmingas");
      }
    });
  }

  // pc_name,
  // computer_owner,
  // processor,
  // graphics_card,
  // ram_type,
  // ram_speed,
  // amount_of_ram,
  // computer_type,
  // pc_image

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
                type="file"
                accept=".jpg,.png"
                multiple
                ref={pcImagesInputRef}
                onChange={(e) => {
                  if (e.target.files.length > 2) {
                    alert("Maximum files chosen: 2");
                    e.target.value = "";
                  }
                }}
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
