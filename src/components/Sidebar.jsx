import React from "react";
import "../styles/Sidebar.css";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul className="navbar">
        <li className="nav-item">Home</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">News</li>
        <li className="nav-item">Blog</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;
