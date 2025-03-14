/* import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import ButtonsGrid from "./ButtonsGrid";

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
            opacity: hoverGrid ? "0.10" : "1",
            transition: "opacity 0.3s ease-in-out",
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
               Cette syntaxe crée un tableau de longueur yellowStars et mappe chaque élément pour afficher une étoile jaune. 

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
       Boutons qui apparaissent au survol 
      {hoverGrid && (
        <div
          className="text-center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            zIndex: 999,
          }}
        >
          <ButtonsGrid />
        </div>
      )}
    </div>
  );
}

export default Grid;
 */

import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import ButtonsGrid from "./ButtonsGrid";

function Grid({
  NamePizza,
  Pizza,
  OldPrice,
  NewPrice,
  whiteStars,
  yellowStars,
}) {
  const [hoverGrid, setHoverGrid] = useState(false);
  const [buttonsActive, setButtonsActive] = useState(false);
  
  const handleGridMouseEnter = () => {
    setHoverGrid(true);
  };
  
  const handleGridMouseLeave = () => {
    // Vérifier si le survol ne touche pas les boutons
    if (!buttonsActive) {
      setHoverGrid(false);
    }
  };
  
  const handleButtonsMouseEnter = () => {
    setButtonsActive(true);
  };
  
  const handleButtonsMouseLeave = () => {
    setButtonsActive(false);
    // Vérifier si le pointeur est toujours dans la grille
    // Si non, masquer les boutons aussi
    if (!document.querySelector(".grid-container:hover")) {
      setHoverGrid(false);
    }
  };

  return (
    <div className="position-relative grid-container">
      <div
        className="col"
        onMouseEnter={handleGridMouseEnter}
        onMouseLeave={handleGridMouseLeave}
      >
        <div
          className="card h-100"
          style={{
            opacity: hoverGrid ? "0.10" : "1",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <p className="text-center mt-5 ">
            <img
              src={Pizza}
              style={{ width: "200px", height: "auto" }}
              alt=""
            />
          </p>
          <div className="card-body ms-4">
            <h5 className="card-titlel">
              {[...Array(yellowStars)].map((_, i) => (
                <FaStar key={i} className="text-warning" />
              ))}
              {[...Array(whiteStars)].map((_, i) => (
                <FaRegStar key={i} />
              ))}
            </h5>
            <p className="card-text ">{NamePizza}</p>
            <div className="d-flex ">
              <p className=" text-secondary text-decoration-line-through">
                {OldPrice}
              </p>
              <p className="ms-2 text-info">{NewPrice}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Boutons qui apparaissent au survol */}
      {hoverGrid && (
        <div
          className="text-center buttons-overlay"
          onMouseEnter={handleButtonsMouseEnter}
          onMouseLeave={handleButtonsMouseLeave}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            zIndex: 999,
          }}
        >
          <ButtonsGrid />
        </div>
      )}
    </div>
  );
}

export default Grid;