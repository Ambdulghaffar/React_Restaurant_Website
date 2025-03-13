import React from "react";
import Banner from "../../components/header/Banner";
import salade from "../../assets/salade.jpg";
import burger from "../../assets/burger.jpg";
import pizza3 from "../../assets/pizza3.jpg";
import dessert from "../../assets/dessert.jpg";
import drinks from "../../assets/drinks.jpg";
import seafood from "../../assets/seafood.jpg";
import Column from "../../components/cards/Column";
import Cards from "../../components/cards/Cards";
import banner1 from "../../assets/banner1.jpg";
import { BiFontFamily, BiFontSize } from "react-icons/bi";
import { MdHeight } from "react-icons/md";
import { CiTextAlignRight } from "react-icons/ci";

function Home() {
  return (
    <>
      <div className="">
        <Banner />
        <h1 className="text-center  my-5 fs-1">Our Menu</h1>
        <div class="container text-center">
          <div class="row">
            <Column
              img={salade}
              icon={<i className="bi bi-egg-fried"></i>}
              name="Salads"
            />
            <Column
              img={pizza3}
              icon={<i className="bi bi-egg-fried"></i>}
              name="Pizzas"
            />
            <Column
              img={burger}
              icon={<i class="bi bi-cup-straw"></i>}
              name="Burgers"
            />
          </div>
        </div>
        <div class="container text-center mt-4 mb-5">
          <div class="row">
            <Column
              img={dessert}
              icon={<i className="bi bi-cake"></i>}
              name="Desserts"
            />
            <Column
              img={drinks}
              icon={<i class="bi bi-cup-straw"></i>}
              name="Drinks"
            />
            <Column
              img={seafood}
              icon={<i className="bi bi-egg"></i>}
              name="Seafood"
            />
          </div>
        </div>
        <Cards
          img={banner1}
          cardtitle1="Best atmosphere"
          cardtext1="PizzaHouse is the place of the best"
          cardtext2="pizza and high-quality service."
          cardbutton="View our Services"
          cardstyle={{marginBottom: "30px"}}
          cardImgStyle={{height:"400px", objectFit: "cover" , filter: "brightness(0.5)"}}
          cardBodyStyle={{textAlign: "right", marginLeft: "0", marginRight: "100px"  }}
          cardTitleStyle={{fontSize: "50px",fontFamily:"Arial,sans-serif,Times New Roman"}}
        />
      </div>
    </>
  );
}

export default Home;
