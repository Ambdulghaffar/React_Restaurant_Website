import React from "react";
import Grid from "../cards/Grid";
import pizza4 from "../../assets/pizza4.jpg";
import pizza5 from "../../assets/pizza5.jpg";
import pizza6 from "../../assets/pizza6.jpg";
import pizza7 from "../../assets/pizza7.jpg";

function GridPizza() {
  return (
    <div>
      <div class="container text-center">
        <div class="row row-cols-2">
          <Grid
            Pizza={pizza4}
            NamePizza="Margherita Pizza"
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
            Pizza={pizza5}
            NamePizza="Mushroom Pizza"
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
            Pizza={pizza6}
            NamePizza="Hawaiian Pizza"
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
            Pizza={pizza7}
            NamePizza="Pesto Pizza"
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

export default GridPizza;
