import ButtonCards from "./ButtonCards";
import { motion } from "framer-motion";

function Cards({
  img,
  alt,
  cardtitle1,
  cardtitle2,
  cardtext1,
  cardtext2,
  cardTitleStyle,
  cardBodyStyle,
  cardImgStyle,
  cardstyle,
  cardstyletext1,
  cardbutton,
  cardstylebutton,
  showbutton,
  shomotion = true
}) {
  return (
    <div>
      <div className="card text-bg-dark" style={{ ...cardstyle }}>
        {shomotion ? (
          <motion.img
            src={img}
            className="card-img"
            alt={alt}
            style={{ height: "700px", objectFit: "cover", ...cardImgStyle }}
            animate={{ scale: [1, 0.99, 1] }} //Fait un zoom progressif de 1 à 1.1 puis revient à 1.
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} // Zoom en boucle
          />
        ) : (
          <img
            src={img}
            className="card-img"
            alt={alt}
            style={{ height: "700px", objectFit: "cover", ...cardImgStyle }}
          />
        )}
        <div
          className="card-img-overlay"
          style={{ marginTop: " 60px ", marginLeft: "100px", ...cardBodyStyle }}
        >
          <h5
            className="card-title fw-bold merriweather"
            style={{ fontSize: "120px", ...cardTitleStyle }}
          >
            {cardtitle1} <br /> {cardtitle2}
          </h5>
          <p
            className="card-text mt-5 mb-5 fw-bold fw-lighter merriweather"
            style={{ ...cardstyletext1 }}
          >
            {cardtext1} <br /> {cardtext2}
          </p>
          <div className="card-text">
            <small>
              <ButtonCards
                showbutton={showbutton}
                cardbutton={cardbutton}
                cardstylebutton={cardstylebutton}
              />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cards;
