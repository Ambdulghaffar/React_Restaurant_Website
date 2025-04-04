import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand playfair fs-2 fw-bold" to="/">
            PizzaHouse
          </Link>
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
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item pe-4">
                <Link
                  className="nav-link active fs-4 playfair fw-bold"
                  aria-current="page"
                  to="/"
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item pe-4 ">
                <Link className="nav-link fs-4 playfair fw-bold" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link
                  className="nav-link fs-4 playfair fw-bold"
                  to="/commandes"
                >
                  Commandes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
