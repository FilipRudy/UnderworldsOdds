import React from "react";
import "../../css/FooterAndHeader/Header.css";
import { useOktaAuth } from "@okta/okta-react";
import { oktaConfig } from "../../lib/oktaConfig";
import {Link} from "react-router-dom";

export const Navbar = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) {
    return <div></div>;
  }

  const handleLogout = async () => oktaAuth.signOut();
  console.log(authState);

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
                <h3>Probability calculator</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <h3>Warbands</h3>
              </a>
            </li>
            {!authState.isAuthenticated ? (
              <li className="nav-item">

                <a type='button' className='btn' onClick={() => {window.location.href="/login";}}> <h3>Log in</h3></a>
              </li>
            ) : (
              <li className="nav-item">
                    <button className='btn' onClick={handleLogout}> <h3>Log out</h3></button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
