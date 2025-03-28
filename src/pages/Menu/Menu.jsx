import React from "react";
import Header from "../../components/header/Header";
import Cards from "../../components/cards/Cards";
import banner2 from "../../assets/banner2.jpg";

function Menu() {
  return (
    <>
      <Cards
        img={banner2}
        cardtitle1="Notre Menu"
        cardtext1="_______"
        cardstyletext1={{
          marginLeft: "380px",
          fontSize: "80px",
        }}
        
        cardTitleStyle={{
          marginRight: "150px",
          fontSize: "100px",
          textAlign: "center",
          fontFamily:""
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
        showbutton={false}
        
      />
    </>
  );
}

export default Menu;
