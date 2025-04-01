import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand  fw-bold" to="/">PizzaHouse</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item pe-4 fs-5">
          <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Accueil</Link>
        </li>
        <li className="nav-item pe-4 fs-5">
          <Link className="nav-link fs-5 fw-bold" to="/menu">Menu</Link>
        </li>
        <li className="nav-item pe-4 fs-5">
          <Link className="nav-link fs-5 fw-bold" to="/commandes">Commandes</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header