import React from "react";
import Grid from "../cards/Grid";
import B1 from "../../assets/Photo_menu/B1.jpg";
import B2 from "../../assets/Photo_menu/B2.jpg";
import B3 from "../../assets/Photo_menu/B3.jpg";
import B4 from "../../assets/Photo_menu/B4.jpg";


function GridBoissons() {
  return (
    <div>
      <div class="container text-center">
        <div class="row row-cols-2">
          <Grid
            Pizza={B1}
            NamePizza="Jus Naturel"
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="25 Є"
            NewPriceStyle={{
              marginLeft: "90px",
            }}
            yellowStars={0}
            whiteStars={0}
          />
          <Grid
            Pizza={B2}
            NamePizza="Smoothies"
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="15 Є"
            NewPriceStyle={{
              marginLeft: "90px",
            }}
            yellowStars={0}
            whiteStars={0}
          />
          <Grid
            Pizza={B3}
            NamePizza="Boissons Gazeuses"
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="24 Є "
            NewPriceStyle={{
              marginLeft: "90px",
            }}
            yellowStars={0}
            whiteStars={0}
          />
          <Grid
            Pizza={B4}
            NamePizza="Bouteille d'eau"
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="30 Є"
            NewPriceStyle={{
              marginLeft: "90px",
            }}
            yellowStars={0}
            whiteStars={0}
          />
        </div>
      </div>
    </div>
  );
}

export default GridBoissons;
