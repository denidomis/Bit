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
        <a
          className=" -left-12 top-1 h-7 w-12 text-center absolute rounded bg-blue-500"
          href="/"
        >
          {" "}
          back
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
              Lessor: <span className="italic font-normal">Justelio19</span>
            </p>
            <div className="grid grid-cols-4">
              <div className="font-bold">Computer name</div>
              <div className="col-span-3 text-center">{pcDetails.pc_name}</div>
              <div className="font-bold">Processor (CPU)</div>
              <div className="col-span-3 text-center">
                {pcDetails.processor}
              </div>
              <div className="font-bold">Grafikos (GPU)</div>
              <div className="col-span-3 text-center">
                {pcDetails.graphics_card}
              </div>
              <div className="font-bold">Ram type</div>
              <div className="col-span-3 text-center">{pcDetails.ram_type}</div>
              <div className="font-bold">Ram speed</div>
              <div className="col-span-3 text-center">
                {pcDetails.ram_speed}
              </div>
              <div className="font-bold">Ram amount</div>
              <div className="col-span-3 text-center">
                {pcDetails.amount_of_ram}
              </div>
              <div className="font-bold">Computer type</div>
              <div className="col-span-3 text-center">
                {pcDetails.computer_type}
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}
