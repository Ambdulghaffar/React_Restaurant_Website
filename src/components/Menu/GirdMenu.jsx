import React from "react";
import GirdPizza from "./GirdPizza";

function GirdMenu() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center  mt-5 py-3 text-center bg-secondary text-white">
        <div className="mx-5">Pizza</div>
        <div className="mx-5">Tacos</div>
        <div className="mx-5">Boissons</div>
        <div className="mx-5">Salades</div>
        <div className="mx-5">Desserts</div>
        <div className="mx-5">Supplements</div>
      </div>
      <div className="container text-center my-4">
        <div className="row">
          <div className="col-7 border border-2">
            <GirdPizza />
          </div>
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

export default GirdMenu;
