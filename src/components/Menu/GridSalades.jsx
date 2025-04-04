import React from "react";
import S1 from "../../assets/Photo_menu/S1.jpg";
import S2 from "../../assets/Photo_menu/S2.jpg";
import S3 from "../../assets/Photo_menu/S3.jpg";
import S4 from "../../assets/Photo_menu/S4.jpg";
import Grid from "../cards/Grid";

function GridSalades() {
  // Définir les salades dans un tableau d'objets
  const salades = [
    {
      id: 1,
      image: S1,
      name: "Salades Marocaines",
      price: "25",
    },
    {
      id: 2,
      image: S2,
      name: "Salades Simple",
      price: "15",
    },
    {
      id: 3,
      image: S3,
      name: "Salades Composées",
      price: "24",
    },
    {
      id: 4,
      image: S4,
      name: "Salades de pâtes",
      price: "30",
    },
  ];

  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-2">
          {salades.map((salade) => (
            <Grid
              key={salade.id}
              Pizza={salade.image}
              NamePizza={salade.name}
              NamePizzaStyle={{ fontSize: "20px" }}
              NewPrice={salade.price}
              NewPriceStyle={{ marginLeft: "90px" }}
              yellowStars={0}
              whiteStars={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GridSalades;
