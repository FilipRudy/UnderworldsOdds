import React from "react";
import "../../css/FooterAndHeader/Header.css";
import {NavLink} from "react-router-dom";
export const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand">
          <h3>WHU</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">
                <NavLink style={{ textDecoration: "none" }} to="/"><h3>Probability calculator</h3></NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <NavLink style={{ textDecoration: "none" }} to="/warbands"><h3>Warbands</h3></NavLink>

              </a>
            </li>


              <li className="nav-item">
                    <button className='btn' > <h3>Log out</h3></button>
              </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
