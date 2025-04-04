import React from "react";
import Grid from "../cards/Grid";
import pizza4 from "../../assets/pizza4.jpg";
import pizza5 from "../../assets/pizza5.jpg";
import pizza6 from "../../assets/pizza6.jpg";
import pizza7 from "../../assets/pizza7.jpg";

function GridPizza() {
  const pizzas = [
    {
      id: 1,
      image: pizza4,
      name: "Margherita Pizza",
      price: "25",
    },
    {
      id: 2,
      image: pizza5,
      name: "Mushroom Pizza",
      price: "15",
    },
    {
      id: 3,
      image: pizza6,
      name: "Hawaiian Pizza",
      price: "24",
    },
    {
      id: 4,
      image: pizza7,
      name: "Pesto Pizza",
      price: "30",
    },
  ];

  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-lg-2  row-cols-sm-1">
          {pizzas.map((pizza) => (
            <Grid
              key={pizza.id}
              Pizza={pizza.image}
              NamePizza={pizza.name}
              NamePizzaStyle={{
                fontSize: "20px",
              }}
              NewPrice={pizza.price}
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

export default GridPizza;
