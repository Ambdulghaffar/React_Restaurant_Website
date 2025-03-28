import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";

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
  showbutton = true,
}) {
  const [hoverGrid, setHoverGrid] = useState(false);
  return (
    <div className="position-relative my-3">
      <div
        class="col"
        onMouseEnter={() => setHoverGrid(true)}
        onMouseLeave={() => setHoverGrid(false)}
      >
        <div
          className="card h-100"
          style={{
            transform: hoverGrid ? "translateY(10px)" : "",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <p className="text-center mt-5 ">
            <img
              src={Pizza}
              style={{
                ...PizzaStyle,
                objectFit: "cover",
                width: "250px",
                height: "230px",
                borderRadius: "10px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              alt=""
            />
          </p>

          <div className="card-body ms-4">
            <h5 className="card-titlel">
              {[...Array(yellowStars)].map((_, i) => (
                <FaStar key={i} className="text-warning" />
              ))}
              {/*   Cette syntaxe crée un tableau de longueur yellowStars et mappe chaque élément pour afficher une étoile jaune.  */}

              {[...Array(whiteStars)].map((_, i) => (
                <FaRegStar key={i} />
              ))}
            </h5>
            <p className="card-text " style={{ ...NamePizzaStyle }}>
              {NamePizza}
            </p>
            <div className="d-flex ">
              <p className=" text-secondary text-decoration-line-through">
                {OldPrice}
              </p>
              <p className=" text-info" style={{ ...NewPriceStyle }}>
                {NewPrice}
              </p>
            </div>
          </div>
          {showbutton && (
            <div className="card-footer bg-success">
              <small className="text-white fs-5">Ajouter au panier</small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Grid;
