import { FaPen, FaTrashAlt } from "react-icons/fa";

function Status({ status }) {
  return (
    <div
      className="rounded-full w-[20px] h-[20px] inline-block"
      style={{ backgroundColor: status ? "lime" : "red" }}
    ></div>
  );
}

function Scooter({ scooter }) {
  return (
    <div
      key={scooter.id}
      className="bg-white rounded p-4 flex flex-wrap gap-10"
    >
      <div>
        <h3 className="font-bold">{scooter.title}</h3>
        <div className="">Rida {scooter.ride}km</div>
      </div>
      <div>
        <h3 className="font-bold">Valst. Nr.</h3>
        <div>{scooter.registrationCode}</div>
      </div>
      <div>
        <h3 className="font-bold">Kaina/val</h3>
        <div>{scooter.hourlyPrice}euro</div>
      </div>
      <div>
        <h3 className="font-bold">Paskutinio naudojimo data</h3>
        <div>{new Date(scooter.lastUseTime).toLocaleDateString("lt")}</div>
      </div>
      <div>
        <h3 className="font-bold">Statusas</h3>
        <Status status={scooter.isBusy} />{" "}
        {scooter.isBusy ? "(Laisvas)" : "(Užimtas)"}
      </div>
      <div className="flex gap-4 text-xl h-full items-center">
        <FaPen className="text-blue-700 hover:text-blue-900 cursor-pointer" />
        <FaTrashAlt className="text-red-700 hover:text-red-900 cursor-pointer" />
      </div>
    </div>
  );
}

export default function Middle({ scooter }) {
  return (
    <div className="container flex flex-col gap-4 p-4 mx-auto bg-blue-200 min-h-[400px]">
      {scooter.map((s) => (
        <Scooter key={s.id} scooter={s} />
      ))}
    </div>
  );
}
