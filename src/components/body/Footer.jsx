import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import {Link} from 'react-router-dom'

function Hoverlink({to,children}) {
  const [hover, setHover] = useState(false);
  return (
    <span
      to={to}
      className={`text-decoration-none ${hover ? "text-warning" : "text-white"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </span>
  );
}


function Footer() {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col my-5">
            <p className="fs-3 fw-bold">Ce qu'on offre</p>
            <div className="d-flex">
              <div className="me-5">
              <p><Hoverlink to="">Pizzas</Hoverlink></p>                
              <p><Hoverlink to="">Salade</Hoverlink></p>                
              <p><Hoverlink to="">Burgers</Hoverlink></p>                
              </div>
              <div className="">
              <p><Hoverlink to="">Desserts</Hoverlink></p> 
              <p><Hoverlink to="">Drinks</Hoverlink></p> 
              <p><Hoverlink to="">Tacos</Hoverlink></p> 
              </div>
            </div>
          </div>
          <div className="col my-5">
            <p className="fs-3 fw-bold">Liens</p>
            <div>
            <p><Hoverlink to="/">Acceuil</Hoverlink></p>
            <p><Hoverlink to="/menu">Menu</Hoverlink></p>
            <p><Hoverlink to="/commandes">Commandes</Hoverlink></p>
            </div>
          </div>
          <div className="col my-5">
            <p className="fs-3 fw-bold">Contacts</p>
            <p>
              <FaPhone className="me-4 fs-5" />
              <Link to="" className="text-decoration-none text-white">
                <Hoverlink>0647890345</Hoverlink>
              </Link>
            </p>
            <p>
              <MdEmail className="me-4 fs-5" />
              <Link to="#" className="text-decoration-none text-white">
                <Hoverlink>pizzahouse@email.com</Hoverlink>
              </Link>
            </p>
            <p>
              <GiPositionMarker className="me-4 fs-5" />
              <Link to="" className="text-decoration-none text-white"><Hoverlink>75, bd Ibn Tachfine</Hoverlink></Link>
            </p>
          </div>
          <p className="text-center mb-5">
            <span>© 2025. All Rights Reserved. Design by PizzaHouse</span>
            <Link to="">
              <FaFacebook className="mx-4 text-white  fs-4" />
            </Link>
            <Link to="">
              <FaXTwitter className="me-4 text-white   fs-4" />
            </Link>
            <Link to="">
              <FaSquareInstagram className="text-white  fs-4" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
