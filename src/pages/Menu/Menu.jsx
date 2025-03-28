import React from "react";
import BannerZoom from "../../components/cards/BannerZoom";
import Grid from "../../components/cards/Grid";
import pizza4 from "../../assets/pizza4.jpg";
import pizza5 from "../../assets/pizza5.jpg";
import pizza6 from "../../assets/pizza6.jpg";
import pizza7 from "../../assets/pizza7.jpg";

function Menu() {
  return (
    <>
      <BannerZoom title="Notre Menu" />
      <div className="container d-flex justify-content-center align-items-center  mt-5 py-3 text-center bg-secondary text-white">
        <div className="mx-5">Pizza</div>
        <div className="mx-5">Tacos</div>
        <div className="mx-5">Boissons</div>
        <div className="mx-5">Salades</div>
        <div className="mx-5">Desserts</div>
      </div>
      <div className="container text-center my-4">
        <div className="row">
          <div className="col-7 border border-2">
            <div class="container text-center">
              <div class="row row-cols-2">
                <Grid
                  Pizza={pizza4}
                  NamePizza="Margherita Pizza"
                  NewPrice="$24.00"
                  yellowStars={0}
                  whiteStars={0}
                />
                <Grid
                  Pizza={pizza5}
                  NamePizza="Margherita Pizza"
                  NewPrice="$24.00"
                  yellowStars={0}
                  whiteStars={0}
                />
                <Grid
                  Pizza={pizza6}
                  NamePizza="Hawaiian Pizza"
                  NewPrice="$24.00 "
                  yellowStars={0}
                  whiteStars={0}
                />
                <Grid
                  Pizza={pizza7}
                  NamePizza="Pesto Pizza"
                  NewPrice="$24.00"
                  OldPrice="$40.00"
                  yellowStars={0}
                  whiteStars={0}
                />
              </div>
            </div>
          </div>
          <div className="col"></div>
          <div className="col-4">
            <div className="row">
              <div className="col">
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
                    <small className="text-white ">commander</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
