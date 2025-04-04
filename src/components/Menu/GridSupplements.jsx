import React from "react";
import S1 from "../../assets/Photo_menu/SUP1.jpg";
import S2 from "../../assets/Photo_menu/SUP2.jpg";
import S3 from "../../assets/Photo_menu/SUP3.jpg";
import S4 from "../../assets/Photo_menu/SUP4.jpg";
import Grid from "../cards/Grid";

function GridSupplements() {
  const supplements = [
    { id: 1, image: S1, name: "Frites", price: "5" },
    { id: 2, image: S2, name: "Riz pilaf", price: "10" },
    { id: 3, image: S3, name: "Pâtes fraîche", price: "12" },
    { id: 4, image: S4, name: "Salade de fruits frais", price: "8" },
  ];
  return (
    <div>
      <div class="container text-center">
        <div class="row row-cols-2">
          {supplements.map((supplement) => (
            <Grid
              key={supplement.id}
              Pizza={supplement.image}
              NamePizza={supplement.name}
              NamePizzaStyle={{
                fontSize: "20px",
              }}
              NewPrice={supplement.price}
              NewPriceStyle={{
                marginLeft: "90px",
              }}
              yellowStars={0}
              whiteStars={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridSupplements;
