import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { useCart } from "../Menu/CartContext";

function Grid({
  NamePizza,
  NamePizzaStyle,
  Pizza,
  PizzaStyle,
  OldPrice,
  NewPrice,
  NewPriceStyle,
  whiteStars,
  yellowStars,
}) {
  const [hoverButton, setHoverButton] = useState(false);
  const [hoverGrid, setHoverGrid] = useState(false);
  const { addToCart } = useCart();
  
  return (
    <div className="position-relative my-2">
      <div
        className="col"
        onMouseEnter={() => setHoverGrid(true)}
        onMouseLeave={() => setHoverGrid(false)}
      >
        <div
          className="card"
          style={{
            transform: hoverGrid ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease-in-out",
            cursor: "pointer",
          }}
        >
          <div className="text-center mt-3">
            <img
              src={Pizza}
              style={{
                ...PizzaStyle,
                objectFit: "cover",
                width: "200px",
                height: "180px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              alt=""
            />
          </div>

          <div className="card-body ms-3 py-2">
            <h5 className="card-titlel mb-1">
              {[...Array(yellowStars)].map((_, i) => (
                <FaStar key={i} className="text-warning" />
              ))}
              {[...Array(whiteStars)].map((_, i) => (
                <FaRegStar key={i} />
              ))}
            </h5>
            <p className="card-text mb-1" style={{ ...NamePizzaStyle }}>
              {NamePizza}
            </p>
            <div className="d-flex">
              <p className="text-secondary text-decoration-line-through mb-1 me-2">
                {OldPrice}
              </p>
              <p className="text-info mb-1" style={{ ...NewPriceStyle }}>
                {NewPrice} Є
              </p>
            </div>
          </div>

          <div
            className={`card-footer text-center ${
              hoverButton ? "bg-success" : "bg-warning"
            } py-1`}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
          >
            <small
              className="text-white h5"
              onClick={() => addToCart(NamePizza, NewPrice)}
              style={{ cursor: "pointer" }}
            >
              Ajouter au panier
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
