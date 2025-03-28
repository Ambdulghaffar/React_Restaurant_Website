import React, { useState } from "react";
import GridPizza from "./GridPizza";
import GridTacos from "./GridTacos";
import GridSalades from "./GridSalades";
import GridBoissons from "./GridBoissons";
import GridDesserts from "./GridDesserts";
import GridSupplements from "./GridSupplements";
import { FaTrash } from "react-icons/fa";

function GridMenu() {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");
  const [hoverButton, setHoverButton] = useState(false);

  
  // Fonction pour changer la catégorie
  const handleClick = (category) => {
    setSelectedCategory(category);
  };
  const categories = [
    "Pizza",
    "Tacos",
    "Salades",
    "Boissons",
    "Desserts",
    "Supplements",
  ];
  return (
    <div>
      {/* Menu de sélection */}
      <div className="container d-flex justify-content-center align-items-center mt-5 py-3 text-center bg-secondary text-white">
        {categories.map((category) => (
          <div
            key={category}
            className={`mx-4 px-3 py-2 ${
              selectedCategory === category ? "bg-dark rounded" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(category)}
          >
            {category}
          </div>
        ))}
      </div>

      {/* Affichage conditionnel de la grille */}
      <div className="container text-center my-4">
        <div className="row">
          <div className="col-7 border border-2">
            {selectedCategory === "Pizza" && <GridPizza />}
            {selectedCategory === "Tacos" && <GridTacos />}
            {selectedCategory === "Salades" && <GridSalades />}
            {selectedCategory === "Boissons" && <GridBoissons />}
            {selectedCategory === "Desserts" && <GridDesserts />}
            {selectedCategory === "Supplements" && <GridSupplements />}
          </div>

          {/* Panier */}
          <div className="col"></div>
          <div className="col-4">
            <div className="row">
              <div className="col" style={{ height: "400px" }}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">Votre panier</h5>
                    <hr />
                    <p className="card-text d-flex justify-content-between">
                      <span>Pizza normal</span>
                      <span>10 Є</span>
                      <span className="text-danger"><FaTrash size={12} /></span>
                    </p>
                  </div>
                  <div className={`card-footer ${hoverButton ? "bg-success" : "bg-warning"}`}
                  onMouseEnter={()=>setHoverButton(true)}
                  onMouseLeave={()=>setHoverButton(false)}
                  >
                    <small className="text-white h5">Commander</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridMenu;
