import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  const [hover, setHover] = useState(false);
  return (
    <div className="bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col my-5">
            <p className="fs-3 fw-bold">Ce qu'on offre</p>
            <div className="d-flex">
              <div className="me-5">
                <p>
                  <a
                    href=""
                    className={`text-decoration-none ${
                      hover ? "text-warning" : "text-white"
                    }`}
                  >
                    Pizzas
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className={`text-decoration-none ${
                      hover ? "text-warning" : "text-white"
                    } `}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  >
                    Burgers
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className={`text-decoration-none ${
                      hover ? "text-warning" : "text-white"
                    } `}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  >
                    Salades
                  </a>
                </p>
              </div>
              <div className="">
                <p>
                  <a
                    href=""
                    className={`text-decoration-none ${
                      hover ? "text-warning" : "text-white"
                    } `}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  >
                    Drinks
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className={`text-decoration-none ${
                      hover ? "text-warning" : "text-white"
                    } `}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  >
                    Tacos
                  </a>
                </p>
                <p>
                  <a
                    href=""
                    className={`text-decoration-none ${
                      hover ? "text-warning" : "text-white"
                    } `}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(true)}
                  >
                    Drinks
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col my-5">
            <p className="fs-3 fw-bold">Liens</p>
            <div>
              <a
                href=""
                className={`text-decoration-none ${
                  hover ? "text-warning" : "text-white"
                } `}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(true)}
              >
                Acceuil
              </a>{" "}
              <br />
              <a
                href=""
                className={`text-decoration-none ${
                  hover ? "text-warning" : "text-white"
                } `}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(true)}
              >
                Menu
              </a>{" "}
              <br />
              <a
                href=""
                className={`text-decoration-none ${
                  hover ? "text-warning" : "text-white"
                } `}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(true)}
              >
                Commandes
              </a>
              <br />
              <a
                href=""
                c
                className={`text-decoration-none ${
                  hover ? "text-warning" : "text-white"
                } `}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(true)}
              >
                Contacts
              </a>
            </div>
          </div>
          <div class="col my-5">
            <p className="fs-3 fw-bold">Contacts</p>
            <p>
              <FaPhone className="me-4 fs-5" />
              <a href="" className="text-decoration-none text-white">
                0647890345
              </a>
            </p>
            <p>
              <MdEmail className="me-4 fs-5" />
              <a href="" className="text-decoration-none text-white">
                pizzahouse@email.com
              </a>
            </p>
            <p>
              <GiPositionMarker className="me-4 fs-5" />
              <span>175, bd Ibn Tachfine</span>
            </p>
          </div>
          <p className="text-center mb-5">
            <span>© 2025. All Rights Reserved. Design by PizzaHouse</span>
            <a href="">
              <FaFacebook className="mx-4 text-white  fs-4" />
            </a>
            <a href="">
              <FaXTwitter className="me-4 text-white   fs-4" />
            </a>
            <a href="">
              <FaSquareInstagram className="text-white  fs-4" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
