import React from "react";
import T1 from "../../assets/Photo_menu/T1.jpg";
import T2 from "../../assets/Photo_menu/T2.jpg";
import T3 from "../../assets/Photo_menu/T3.jpg";
import T4 from "../../assets/Photo_menu/T4.jpg";
import Grid from "../cards/Grid";

function GridTacos() {
  return (
    <div>
      <div class="container text-center">
        <div class="row row-cols-2">
          <Grid
            Pizza={T1}
            NamePizza="Tacos Mixte"
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="25 "
            NewPriceStyle={{
              marginLeft: "90px",
            }}
            yellowStars={0}
            whiteStars={0}
          />
          <Grid
            Pizza={T2}
            NamePizza="Tacos Poulet"
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="15 "
            NewPriceStyle={{
              marginLeft: "90px",
            }}
            yellowStars={0}
            whiteStars={0}
          />
          <Grid
            Pizza={T3}
            NamePizza="Tacos Nuggets "
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="24  "
            NewPriceStyle={{
              marginLeft: "90px",
            }}
            yellowStars={0}
            whiteStars={0}
          />
          <Grid
            Pizza={T4}
            NamePizza="Tacos Viande Hachée "
            NamePizzaStyle={{
              fontSize: "20px",
            }}
            NewPrice="30 "
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

export default GridTacos;
