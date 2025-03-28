import React from "react";
import BannerZoom from "../../components/cards/BannerZoom";
import Footer from "../../components/header/Footer";
import GirdMenu from "../../components/Menu/GirdMenu";

function Menu() {
  return (
    <>
      <BannerZoom title="Notre Menu" />
      <GirdMenu/>
      <Footer/>
    </>
  );
}

export default Menu;
