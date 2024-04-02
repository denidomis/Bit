import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "/utils/api/pcService";
export default function PcPage() {
  const [isPcFound, setIsPcFound] = useState(false);
  const [pcDetails, setPcDetails] = useState({});
  const [pcImages, setPcImages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getById(id, (resp) => {
      setIsPcFound(resp.status);
      setPcDetails(resp.pc);
      setPcImages(resp.pcImages);
    });
  }, []);

  if (!isPcFound) return <div>Pc was not found</div>;
  else
    return (
      <main className="container mx-auto relative min-h-[100vh]">
        <a href="/" className=" bg-black absolute -ml-12 mt-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-10 h-10 fill-blue-500 stroke-blue-900"
          >
            <path d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </a>
        <div className="absolute translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2 bg-blue-100 min-w-[400px] w-[60%] rounded-xl overflow-hidden">
          <div className="pc-image bg-blue-50">
            {pcImages.map((image) => (
              <img
                src={"/server/api/" + image.uri}
                key={image.id}
                alt="pc-image"
                className="min-h-[200px]"
              />
            ))}
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-center mb-4">
              {pcDetails.pcName}
            </h3>
            <p className="font-bold">
              Lessor: <span className="italic font-normal">Dode</span>
            </p>
            <div className="grid grid-cols-4">
              <div className="font-bold">Computer name</div>
              <div className="col-span-3">{pcDetails.pc_name}</div>
              <div className="font-bold">Processor (CPU)</div>
              <div className="col-span-3">{pcDetails.processor}</div>
              <div className="font-bold">Grafics (GPU)</div>
              <div className="col-span-3">{pcDetails.graphics_card}</div>
              <div className="font-bold">Ram type</div>
              <div className="col-span-3">{pcDetails.ram_type}</div>
              <div className="font-bold">Ram speed</div>
              <div className="col-span-3">{pcDetails.ram_speed}</div>
              <div className="font-bold">Ram amount</div>
              <div className="col-span-3">{pcDetails.amount_of_ram}</div>
              <div className="font-bold">Computer type</div>
              <div className="col-span-3">{pcDetails.computer_type}</div>
            </div>
          </div>
        </div>
      </main>
    );
}
