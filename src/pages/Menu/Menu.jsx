import React from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import banner2 from "../../assets/banner2.jpg";

function Menu() {
  return (
    <>
      <Cards
        img={banner2}
        cardtitle1="PizzaHouse - delicieuses Pizzas Livrées"
        cardtext1="Commendez en ligne, savourez chez vous"
        cardstyletext1={{
          marginLeft: "310px",
          fontSize: "20px",
        }}
        cardTitleStyle={{
          marginRight: "150px",
          fontFamily: "serif",
          fontSize: "30px",
          textAlign: "center",
        }}
        cardImgStyle={{
          height: "400px",
          objectFit: "cover",
          filter: "brightness(0.4)",
        }}
        cardbutton="Commander"
        cardstylebutton={{
          marginLeft: "390px",
        }}
      />
    </>
  );
}

export default Menu;
