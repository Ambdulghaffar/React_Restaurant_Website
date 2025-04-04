import React from "react";
import Grid from "../cards/Grid";
import B1 from "../../assets/Photo_menu/B1.jpg";
import B2 from "../../assets/Photo_menu/B2.jpg";
import B3 from "../../assets/Photo_menu/B3.jpg";
import B4 from "../../assets/Photo_menu/B4.jpg";

function GridBoissons() {
  const boissons = [
    {
      id: 1,
      image: B1,
      name: "Jus Naturel",
      price: "25",
    },
    {
      id: 2,
      image: B2,
      name: "Smoothies",
      price: "15",
    },
    {
      id: 3,
      image: B3,
      name: "Boissons Gazeuses",
      price: "24",
    },
    {
      id: 4,
      image: B4,
      name: "Bouteille d'eau",
      price: "30",
    },
  ];

  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-lg-2  row-cols-sm-1">
          {boissons.map((boisson) => (
            <Grid
              key={boisson.id}
              Pizza={boisson.image}
              NamePizza={boisson.name}
              NamePizzaStyle={{
                fontSize: "20px",
              }}
              NewPrice={boisson.price}
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

export default GridBoissons;
