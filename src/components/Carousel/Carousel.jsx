import React from "react";
import Pizza1 from "../../assets/Pizza1.jpg";
import Pizza2 from "../../assets/Pizza2.jpg";
import Cards from "../cards/Cards";

function Carousel() {
  return (
    <div>
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <Cards img={Pizza1}  alt="Pizza1" cardtitle1="Pizza de" cardtitle2="Qualité" cardtext1="Nous utilisons uniquement les meilleurs ingrédients pour " cardtext2="préparer des pizzas uniques pour nos clients." cardbutton="Voir notre Menu"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <Cards img={Pizza2} alt="Pizza2" cardtitle1="Pizza" cardtitle2="Parfait" cardtext1="Vivez le goût d'une pizza parfaite chez " cardtext2="PizzaHouse, l'un des meilleurs restaurants!" cardbutton="Voir notre Menu"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}

export default Carousel;
