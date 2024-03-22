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
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white min-h-[300px] min-w-[100px] max-w-[250px]">
        <div className="img">
          <img src={`/pc-images/${pc.pc_image}`} className="w-full" />
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
      // if (!data.isLoggedIn) {
      // 	navigate("/login");
      // }
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
            <Link
              to="/add-new-pc"
              className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded mx-2"
            >
              Pridėti nuomos skelbimą
            </Link>
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
