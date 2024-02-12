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

  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

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
        <div className={style.headernd}>
          <div className={style.searchDropdown}>
            <h5 className="h-100 d-flex align-items-center justify-content-center">
              <i className="bi bi-search m-2" onClick={toggleInput}></i>
            </h5>
            {isExpanded && (
              <input
                className={style.expandableInput}
                type="text"
                placeholder="Search"
              />
            )}
            <div className={style.selectContainer}>
              <div className={style.dropdown}>
                <div
                  onClick={(e) => {
                    setIsActive(!isActive);
                  }}
                  className={style.dropdownBtn}
                >
                  <h5>{selected}</h5>
                  <span
                    className={isActive ? "bi bi-list-task" : "bi bi-list-task"}
                  />
                </div>
                <div
                  className={style.dropdownContent}
                  style={{ display: isActive ? "block" : "none" }}
                >
                  <div
                    onClick={(e) => {
                      setIsSelected(e.target.textContent);
                      setIsActive(!isActive);
                    }}
                    className={style.item}
                  >
                    Naujausi
                  </div>
                  <div
                    className={style.item}
                    onClick={(e) => {
                      setIsSelected(e.target.textContent);
                      setIsActive(!isActive);
                    }}
                  >
                    Paskutiniai įtraukti
                  </div>
                  <div
                    className={style.item}
                    onClick={(e) => {
                      setIsSelected(e.target.textContent);
                      setIsActive(!isActive);
                    }}
                  >
                    Abėcėlės tvarka
                  </div>
                  <div
                    className={style.item}
                    onClick={(e) => {
                      setIsSelected(e.target.textContent);
                      setIsActive(!isActive);
                    }}
                  >
                    Kūrėjas
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-group">
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
            <li className="list-group-item d-flex bg-dark text-white">
              <img src="images/likedSongs.png" alt="likedSongs" />
              <div className="d-flex flex-column p-2">
                <h6>First checkbox</h6>
                <h6 className="text-secondary">First checkbox</h6>
              </div>
            </li>
          </ul>
        </div>
      </HeaderDiv>
    </header>
  );
}

//jsx - JavaScript XML
//xml - Entensible Markup Language

export default Header;
