import React from "react";
import D1 from "../../assets/Photo_menu/D1.jpg";
import D2 from "../../assets/Photo_menu/D2.jpg";
import D3 from "../../assets/Photo_menu/D3.jpg";
import D4 from "../../assets/Photo_menu/D4.jpg";
import Grid from "../cards/Grid";

function GridDesserts() {
  const desserts = [
    { id: 1, image: D1, name: "Cake sucré", price: "5" },
    { id: 2, image: D2, name: "Crème dessert", price: "7" },
    { id: 3, image: D3, name: "Flan", price: "5" },
    { id: 4, image: D4, name: "Dessert aux fruits", price: "10" },
  ];

  return (
    <div>
      <div class="container text-center">
        <div class="row row-cols-2">
          {desserts.map((dessert) => (
            <Grid
              key={dessert.id}
              Pizza={dessert.image}
              NamePizza={dessert.name}
              NamePizzaStyle={{
                fontSize: "20px",
              }}
              NewPrice={dessert.price}
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

export default GridDesserts;
