import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">PizzaHouse</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li class="nav-item pe-4 fs-5">
          <Link className="nav-link active fs-5 fw-bold" aria-current="page" to="/">Accueil</Link>
        </li>
        <li class="nav-item pe-4 fs-5">
          <Link className="nav-link fs-5 fw-bold" to="/about">Menu</Link>
        </li>
        <li class="nav-item pe-4 fs-5">
          <Link className="nav-link fs-5 fw-bold" to="/typography">Commandes</Link>
        </li>
        <li class="nav-item pe-4 fs-5 fs-5 fw-bold">
          <Link className="nav-link" to="/contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header