import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";


function Grid({
  NamePizza,
  Pizza,
  OldPrice,
  NewPrice,
  whiteStars,
  yellowStars,
}) {
  const [hoverGrid, setHoverGrid] = useState(false);
  return (
    <div className="position-relative">
      <div
        class="col"
        onMouseEnter={() => setHoverGrid(true)}
        onMouseLeave={() => setHoverGrid(false)}
      >
        <div
          class="card h-100"
          style={{
            opacithy: hoverGrid ? "0.10" : "1",
            transitionj: "opacity 0.3s ease-in-out",
          }}
        >
          <p className="text-center mt-5 ">
            <img
              src={Pizza}
              style={{ width: "200px", height: "auto" }}
              alt=""
            />
          </p>

          <div class="card-body ms-4">
            <h5 class="card-titlel">
              {[...Array(yellowStars)].map((_, i) => (
                <FaStar key={i} className="text-warning" />
              ))}
             {/*   Cette syntaxe crée un tableau de longueur yellowStars et mappe chaque élément pour afficher une étoile jaune.  */}

              {[...Array(whiteStars)].map((_, i) => (
                <FaRegStar key={i} />
              ))}
            </h5>
            <p class="card-text ">{NamePizza}</p>
            <div className="d-flex ">
              <p className=" text-secondary text-decoration-line-through">
                {OldPrice}
              </p>
              <p className="ms-2 text-info">{NewPrice}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Grid;
 
