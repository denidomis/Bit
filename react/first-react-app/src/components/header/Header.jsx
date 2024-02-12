import React, { useState } from "react";
import style from "./Header.module.css";

function HeaderDiv({ children }) {
  return <div className={style.headerDiv}>{children}</div>;
}

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleInput = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <header className={style.header}>
      <HeaderDiv>
        <h5>
          <i className="bi bi-house-door-fill me-3"></i>Pagrindinis
        </h5>
        <h5>
          <i className="bi bi-search me-3"></i>Paieška
        </h5>
      </HeaderDiv>
      <HeaderDiv>
        <div className="d-flex flex-row justify-content-between w-100">
          <h5>
            <i className="bi bi-collection-fill me-3"></i>Mano Biblioteka
          </h5>
          <h5>
            <i className="bi bi-plus-lg"></i>
          </h5>
        </div>
        <div className="d-flex justify-content-start gap-2 w-100">
          <button className="btn btn-dark p-1">Grojaraštis</button>
          <button className="btn btn-dark p-1">Atlikėjai</button>
          <button className="btn btn-dark p-1">Albumai</button>
        </div>
        <div className="d-flex gap-1 py-2 w-100 justify-content-between">
          <h5>
            <i className="bi bi-search me-2" onClick={toggleInput}></i>
          </h5>
          {isExpanded && (
            <input
              className="bg-dark border-0 rounded"
              type="text"
              placeholder="Search"
            />
          )}
          <select
            className={style.customSelect}
            aria-label="Default select example"
          >
            <option selected>Naujausi</option>
            <option value="1">Paskutiniai įtraukti</option>
            <option value="2">Abėcėlės tvarka</option>
            <option value="3">Kūrėjas</option>
          </select>
        </div>
      </HeaderDiv>
    </header>
  );
}

//jsx - JavaScript XML
//xml - Entensible Markup Language

export default Header;
