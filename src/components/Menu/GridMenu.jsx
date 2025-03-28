import React, { useState } from "react";
import GirdPizza from "./GridPizza";
import GirdTacos from "./GridTacos";
import GridSalades from "./GridSalades";
import GridBoissons from "./GridBoissons";
import GridDesserts from "./GridDesserts";
import GridSupplements from "./GridSupplements";

function GridMenu() {
  const [selectedCategory, setSelectedCategory] = useState("Pizza");

  // fonction pour changer la categorie
  const handleclick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center  mt-5 py-3 text-center bg-secondary text-white">
        {[
          "Pizza",
          "Tacos",
          "Salades",
          "Boissons",
          "Desserts",
          "Supplements",
        ].map((category) => (
          <div
            className={`mx-4 px-3 py-2 ${
              selectedCategory === category ? "bg-dark rounded" : ""
            }`}
            key={category}
            style={{ cursor: "pointer" }}
            onClick={() => handleclick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      {/* Affichage conditionnel de la grille */}
      <div className="container text-center my-4">
        <div className="row">
          <div className="col-7 border border-2">
            {selectedCategory === "Pizza" && <GirdPizza />}
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
                      <p>Pizza normal</p>
                      <p>10 Є</p>
                    </p>
                  </div>
                  <div className="card-footer bg-success">
                    <small className="text-white fs-5">Commander</small>
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
