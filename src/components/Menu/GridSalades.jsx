import React from "react";
import S1 from "../../assets/Photo_menu/S1.jpg";
import S2 from "../../assets/Photo_menu/S2.jpg";
import S3 from "../../assets/Photo_menu/S3.jpg";
import S4 from "../../assets/Photo_menu/S4.jpg";
import Grid from "../cards/Grid";

function GridSalades() {
  return (
    <div>
      <div class="container text-center">
        <div class="row row-cols-2">
          <Grid
            Pizza={S1}
            NamePizza="Margherita Pizza"
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
            Pizza={S2}
            NamePizza="Mushroom Pizza"
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
            Pizza={S3}
            NamePizza="Hawaiian Pizza"
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
            Pizza={S4}
            NamePizza="Pesto Pizza"
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

export default GridSalades;
