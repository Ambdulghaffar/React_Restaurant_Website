import React from "react";
import BannerZoom from "../../components/cards/BannerZoom";
import Footer from "../../components/header/Footer";
import GridMenu from "../../components/Menu/GridMenu";
import { CartProvider } from "../../components/Menu/CartContext";

function Menu() {
  return (
    <>
      <BannerZoom title="Notre Menu" />
      <CartProvider>
        <GridMenu />
      </CartProvider>
      <Footer />
    </>
  );
}

export default Menu;
