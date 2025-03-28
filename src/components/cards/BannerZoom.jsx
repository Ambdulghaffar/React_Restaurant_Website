import React from "react";
import Cards from "../../components/cards/Cards";
import banner2 from "../../assets/banner2.jpg";

function BannerZoom({title}) {
  return (
    <div>
      <Cards
        img={banner2}
        cardtitle1={title}
        cardTitleStyle={{
          marginRight: "150px",
          fontSize: "60px",
          textAlign: "center",
          marginTop: "35px",
        }}
        cardImgStyle={{
          height: "300px",
          objectFit: "cover",
          filter: "brightness(0.3)",
        }}
        showbutton={false}
      />
    </div>
  );
}

export default BannerZoom;
