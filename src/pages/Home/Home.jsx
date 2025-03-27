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
import Grid from "../../components/cards/Grid";
import pizza4 from "../../assets/pizza4.jpg";
import pizza5 from "../../assets/pizza5.jpg";
import pizza6 from "../../assets/pizza6.jpg";
import pizza7 from "../../assets/pizza7.jpg";
import banner2 from "../../assets/banner2.jpg";
import { LuLeaf } from "react-icons/lu";
import { PiHamburgerBold } from "react-icons/pi";
import { CiIceCream } from "react-icons/ci";
import { TbMeat } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPositionMarker } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";


function Home() {
  return (
    <>
      <div>
        <Banner />
        <h1 className="text-center  my-5" style={{ fontSize: "60px" }}>
          Our Menu
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
            <Column img={seafood} icon={<TbMeat />} name="Seafood" />
          </div>
        </div>
        <Cards
          img={banner1}
          cardtitle1="Best atmosphere"
          cardtext1="PizzaHouse is the place of the best"
          cardtext2="pizza and high-quality service."
          cardbutton="View our Services"
          cardstylebutton={{ marginRight: "155px" }}
          cardstyletext1={{
            marginRight: "150px",
            fontFamily: "serif",
            fontSize: "19px",
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
              NewPrice="$24.00"
              yellowStars={4}
              whiteStars={1}
            />
            <Grid
              Pizza={pizza5}
              NamePizza="Mushroom Pizza"
              NewPrice="$24.00"
              yellowStars={5}
              whiteStars={0}
            />
            <Grid
              Pizza={pizza6}
              NamePizza="Hawaiian Pizza"
              NewPrice="$24.00 "
              yellowStars={5}
              whiteStars={0}
            />
            <Grid
              Pizza={pizza7}
              NamePizza="Pesto Pizza"
              NewPrice="$24.00"
              OldPrice="$40.00"
              yellowStars={4}
              whiteStars={1}
            />
          </div>
        </div>
      </div>
      <Cards
        img={banner2}
        cardtitle1="PizzaHouse - delicieuses Pizzas Livrées"
        cardtext1="Commendez en ligne, savourez chez vous"
        cardstyletext1={{
          marginLeft:"310px",
          fontSize:"20px"
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
          marginLeft:"390px"
        }}
      >
      </Cards>
      <div className="bg-dark text-white">
        <div class="container">
          <div class="row">
            <div class="col my-5">
              <p className="fs-3 fw-bold">Ce qu'on offre</p>
              <div className="d-flex">
                <div className="me-5">
                  <p>Pizzas</p>
                  <p>Burgers</p>
                  <p>Salades</p>
                </div>
                <div className="">
                  <p>Drinks</p>
                  <p>Tacos</p>
                  <p>Drinks</p>
                </div>
              </div>
            </div>
            <div class="col my-5">
              <p className="fs-3 fw-bold">Liens</p>
              <div>
                <a href="">Acceuil</a> <br />
                <a href="">Menu</a> <br />
                <a href="">Commandes</a>
                <br />
                <a href="">Contacts</a>
              </div>
            </div>
            <div class="col my-5">
              <p className="fs-3 fw-bold">Contacts</p>
              <p>
                <FaPhone />
              <a href="">0647890345</a>
              </p>
              <p>
              <MdEmail />
              <a href="">pizzahouse@email.com</a>
              </p>
              <p>
              <GiPositionMarker />
                175, bd Ibn Tachfine
              </p>
            </div>
            <p className="text-center mb-5">
              <span>© 2025. All Rights Reserved. Design by PizzaHouse</span>
              <a href=""><FaFacebook className="mx-4 text-white  fs-4" /></a>
              <a href=""><FaXTwitter className="me-4 text-white   fs-4"/></a>
              <a href=""><FaSquareInstagram className="text-white  fs-4"/></a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
