import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Hoverlink({ to, children }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      className={`text-decoration-none playfair ${
        hover ? "text-warning" : "text-white"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <div className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col my-5">
            <p className="fs-3 fw-bold playfair">Ce qu'on offre</p>
            <div className="d-flex">
              <div className="me-5">
                <p>
                  <Hoverlink to="/menu">Pizzas</Hoverlink>
                </p>
                <p>
                  <Hoverlink to="/menu">Salade</Hoverlink>
                </p>
                <p>
                  <Hoverlink to="/menu">Burgers</Hoverlink>
                </p>
              </div>
              <div className="">
                <p>
                  <Hoverlink to="/menu">Desserts</Hoverlink>
                </p>
                <p>
                  <Hoverlink to="/menu">Drinks</Hoverlink>
                </p>
                <p>
                  <Hoverlink to="/menu">Tacos</Hoverlink>
                </p>
              </div>
            </div>
          </div>
          <div className="col my-5">
            <p className="fs-3 fw-bold playfair">Liens</p>
            <div>
              <p>
                <Hoverlink to="/">Acceuil</Hoverlink>
              </p>
              <p>
                <Hoverlink to="/menu">Menu</Hoverlink>
              </p>
              <p>
                <Hoverlink to="/commandes">Commandes</Hoverlink>
              </p>
            </div>
          </div>
          <div className="col my-5">
            <p className="fs-3 fw-bold playfair">Contacts</p>
            <p>
              <FaPhone className="me-4 fs-5" />
              <Link to="tel:0647890345" className="text-decoration-none text-white">
                <Hoverlink>0647890345</Hoverlink>
              </Link>
            </p>
            <p>
              <MdEmail className="me-4 fs-5" />
              <Link to="mailto:pizzahouse@email.com" className="text-decoration-none text-white">
                <Hoverlink>pizzahouse@email.com</Hoverlink>
              </Link>
            </p>
            <p>
              <GiPositionMarker className="me-4 fs-5" />
              <Link to="https://www.google.com/maps?q=75,bd+Ibn+Tachfine" className="text-decoration-none text-white">
                <Hoverlink>75, bd Ibn Tachfine</Hoverlink>
              </Link>
            </p>
          </div> 
          <div className="text-center playfair merriweatherl mb-5 d-flex justify-content-center align-items-center">
            <div>
              <span>© 2025. All Rights Reserved. Design by PizzaHouse</span>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <HoverIcon Icon={<FaFacebook />} />
              <HoverIcon Icon={<FaXTwitter />} />
              <HoverIcon Icon={<FaSquareInstagram />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function HoverIcon({ Icon }) {
    const [hoverIcon, setHoverIcon] = useState(false);
    return (
      <Link to="">
        <p
          className={`ms-4 fs-4 ${hoverIcon ? "text-info" : "text-white"}`}
          onMouseEnter={() => setHoverIcon(true)}
          onMouseLeave={() => setHoverIcon(false)}
        >
          {Icon}
        </p>
      </Link>
    );
  }
}

export default Footer;
