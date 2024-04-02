import { useEffect, useState } from "react";
import { checkSession, logout } from "/utils/api/sessions";
import { Link, useNavigate } from "react-router-dom";
import { getAllPcs } from "../../utils/api/pcService";

function AuthButtons() {
  return (
    <>
      <Link
        to="/registration"
        className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
      >
        Register now
      </Link>
      <Link
        to="/login"
        className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
      >
        Log In
      </Link>
    </>
  );
}

function PcPost({ pc }) {
  // console.log(pc);

  function choosePcImage(pc) {
    const pcImagesArray = pc.images;
    if (pcImagesArray.length !== 0)
      return `/server/api/${pcImagesArray[0].uri}`;
    else return "https://placehold.co/400x300";
  }
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white min-h-[300px] min-w-[100px] max-w-[250px]">
        <div className="img">
          <a
            // href={`/${pc.id}`}
            className="cursor-pointer absolute w-7 h-7 bg-black rounded-xl flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 fill-red-600 stroke-gray-600"
            >
              <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </a>

          <img src={choosePcImage(pc)} className="w-full" />
        </div>
        <div className="details p-4 w-fit mx-auto">
          <a href={`/pc/${pc.id}`}>
            <h3 className="title text-xl mb-2 border-b-4 border-blue-500 w-fit pr-4">
              {pc.pc_name}
            </h3>
          </a>
          <div className="text-xs">
            <div className="flex flex-wrap gap-x-4 mb-1 items-center">
              <span className="inline-block w-1/3 font-bold">Processor:</span>
              <span>{pc.processor}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 mb-1 items-center">
              <span className="inline-block w-1/3 font-bold">
                Graphics card:
              </span>
              <span>{pc.graphics_card}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 mb-1 items-center">
              <span className="inline-block w-1/3 font-bold">Ram type:</span>
              <span>{pc.ram_type}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 mb-1 items-center">
              <span className="inline-block w-1/3 font-bold">Ram speed:</span>
              <span>{pc.ram_speed}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 mb-1 items-center">
              <span className="inline-block w-1/3 font-bold">
                Amount of ram:
              </span>
              <span>{pc.amount_of_ram}</span>
            </div>
            <div className="flex flex-wrap gap-x-4 mb-1 items-center">
              <span className="inline-block w-1/3 font-bold">
                Computer type;:
              </span>
              <span>{pc.computer_type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Main() {
  const [pcList, setPcList] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkSession((data) => {
      setIsLoggedIn(data.isLoggedIn);
    });
    getAllPcs((allPcs) => {
      setPcList(allPcs);
      console.log(allPcs);
    });
  }, [navigate]);
  function logOut() {
    logout((response) => {
      if (response.status) {
        setIsLoggedIn(false);
      }
    });
  }
  // const isLoggedIn = true;
  return (
    <div className="  flex justify-center items-center">
      <div className="container w-[80%] bg-slate-100 min-h-[90vh]   rounded-lg p-6">
        {!isLoggedIn && <AuthButtons />}
        {isLoggedIn && (
          <div className="flex justify-between">
            <div>
              <Link
                to="/add-new-pc"
                className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
              >
                Pridėti nuomos skelbimą
              </Link>
              <Link
                to="my-computers"
                className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
              >
                Pridėti kompiuteriai
              </Link>
            </div>

            <button
              className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded mx-2"
              onClick={logOut}
            >
              Atsijungti
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {pcList.map((pc) => (
            <PcPost pc={pc} key={pc.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
