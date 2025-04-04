import React from "react";
import T1 from "../../assets/Photo_menu/T1.jpg";
import T2 from "../../assets/Photo_menu/T2.jpg";
import T3 from "../../assets/Photo_menu/T3.jpg";
import T4 from "../../assets/Photo_menu/T4.jpg";
import Grid from "../cards/Grid";

function GridTacos() {
  const tacos = [
    {
      id: 1,
      image: T1,
      name: "Tacos Mixte",
      price: "25",
    },
    {
      id: 2,
      image: T2,
      name: "Tacos Poulet",
      price: "15",
    },
    {
      id: 3,
      image: T3,
      name: "Tacos Nuggets",
      price: "24",
    },
    {
      id: 4,
      image: T4,
      name: "Tacos Viande Hachée",
      price: "30",
    },
  ];

  return (
    <div>
      <div className="container text-center">
        <div className=" row row-cols-lg-2  row-cols-sm-1">
          {tacos.map((taco) => (
            <Grid
              key={taco.id}
              Pizza={taco.image}
              NamePizza={taco.name}
              NamePizzaStyle={{
                fontSize: "20px",
              }}
              NewPrice={taco.price}
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

export default GridTacos;
