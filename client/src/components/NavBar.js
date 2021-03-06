import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-secondary navbar-expand-md">
      <Link to="/" className="navbar-brand">
        Presentation Manager
      </Link>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarMenu"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarMenu">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/presentations" className="nav-link">
              Presentations
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/presentations/add-new" className="nav-link">
              New Presentation
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
