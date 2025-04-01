import React from "react";
import salade from "../../assets/salade.jpg";
import burger from "../../assets/burger.jpg";
import pizza3 from "../../assets/pizza3.jpg";
import dessert from "../../assets/dessert.jpg";
import drinks from "../../assets/drinks.jpg";
import tacos from "../../assets/tacos.jpg";
import Column from "../../components/cards/Column";
import Cards from "../../components/cards/Cards";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import Grid from "../../components/cards/Grid";
import pizza4 from "../../assets/pizza4.jpg";
import pizza5 from "../../assets/pizza5.jpg";
import pizza6 from "../../assets/pizza6.jpg";
import pizza7 from "../../assets/pizza7.jpg";
import { LuLeaf } from "react-icons/lu";
import { PiHamburgerBold } from "react-icons/pi";
import { CiIceCream } from "react-icons/ci";
import { GiTacos } from "react-icons/gi";
import Footer from "../../components/body/Footer";
import Banner from "../../components/cards/Banner";

function Home() {
  return (
    <>
      <div>
        <Banner />
        <h1 className="text-center  my-5" style={{ fontSize: "60px" }}>
          Notre Menu
        </h1>
        <div class="container text-center">
          <div class="row">
            <Column img={salade} icon={<LuLeaf />} name="Salads" />
            <Column
              img={pizza3}
              icon={<i className="bi bi-egg-fried"></i>}
              name="Pizzas"
            />
            <Column img={burger} icon={<PiHamburgerBold />} name="Burgers" />
          </div>
        </div>
        <div class="container text-center mt-4 mb-5">
          <div class="row">
            <Column img={dessert} icon={<CiIceCream />} name="Desserts" />
            <Column
              img={drinks}
              icon={<i class="bi bi-cup-straw"></i>}
              name="Drinks"
            />
            <Column img={tacos} icon={<GiTacos />} name="Tacos" />
          </div>
        </div>
        <Cards
          shomotion={false}
          img={banner1}
          cardtitle1="Meilleure ambiance"
          cardtext1="PizzaHouse est l'endroit où vous trouverez la "
          cardtext2="meilleure Pizza et un service de haute qualité."
          cardbutton="Voir notre Menu"
          cardstylebutton={{ marginRight: "250px" }}
          cardstyletext1={{
            marginRight: "120px",
            fontFamily: "serif",
            fontSize: "20px",
          }}
      
          cardstyle={{ marginBottom: "30px" }}
          cardImgStyle={{
            height: "400px",
            objectFit: "cover",
            filter: "brightness(0.4)",
          }}
          cardBodyStyle={{
            textAlign: "right",
            marginLeft: "0",
            marginRight: "100px",
          }}
          cardTitleStyle={{ fontSize: "60px", fontFamily: "serif" }}
        />
        <h1 className="text-center m-5 fw-medium " style={{ fontSize: "60px" }}>
          Selected Pizzas
        </h1>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-4 g-4 py-4">
            <Grid
              Pizza={pizza4}
              NamePizza="Margherita Pizza"
              NewPrice="24.00"
              yellowStars={4}
              whiteStars={1}
            />
            <Grid
              Pizza={pizza5}
              NamePizza="Mushroom Pizza"
              NewPrice="24.00"
              yellowStars={5}
              whiteStars={0}
            />
            <Grid
              Pizza={pizza6}
              NamePizza="Hawaiian Pizza"
              NewPrice="24.00 "
              yellowStars={5}
              whiteStars={0}
            />
            <Grid
              Pizza={pizza7}
              NamePizza="Pesto Pizza"
              NewPrice="24.00"
              yellowStars={4}
              whiteStars={1}
            />
          </div>
        </div>
      </div>
      <Cards
        shomotion={false}
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
      <Footer />
    </>
  );
}

export default Home;
