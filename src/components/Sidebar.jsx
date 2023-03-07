import React, { useState } from "react";
import "../styles/Sidebar.css";
import useMediaQuery from "../hook/useMediaQuery";

function Sidebar(props) {
  const matches = useMediaQuery("(max-width: 768px)");
  const [toggle, setToggle] = useState(false);

  const handleClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {!matches ? (
        <div className="sidebar">
          <ul className="navbar">
            <li className="nav-item">Home</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">News</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">Contact</li>
          </ul>
        </div>
      ) : (
        <div className={`mobile-sidebar ${toggle ? "show-nav" : ""}`}>
          <div className="button-nav">
            <button className="btn" onClick={handleClickToggle}>
              <img
                src={require("../assets/icons/toggle-icon.svg").default}
                className="button-icon"
                alt=""
              />
            </button>
          </div>
          <ul className={`mobile-navbar`}>
            <li className="mobile-nav-item">Home</li>
            <li className="mobile-nav-item">Services</li>
            <li className="mobile-nav-item">News</li>
            <li className="mobile-nav-item">Blog</li>
            <li className="mobile-nav-item">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
