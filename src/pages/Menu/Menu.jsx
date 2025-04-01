import React from "react";
import BannerZoom from "../../components/cards/BannerZoom";
import Footer from "../../components/body/Footer";
import GridMenu from "../../components/Menu/GridMenu";


function Menu() {
  return (
    <>
      <BannerZoom title="Notre Menu" />
        <GridMenu />
      <Footer />
    </>
  );
}

export default Menu;
