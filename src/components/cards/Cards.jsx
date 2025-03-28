import ButtonCards from "./ButtonCards";


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
  showbutton
}) {
  return (
    <div>
      <div className="card text-bg-dark" style={{...cardstyle}} >
        <img
          src={img}
          class="card-img"
          alt={alt}
          style={{ height: "700px", objectFit: "cover",...cardImgStyle }}
        />
        <div
          class="card-img-overlay"
          style={{ marginTop: " 60px ", marginLeft: "100px",...cardBodyStyle}}
        >
          <h5 class="card-title fw-bold" style={{ fontSize: "120px", ...cardTitleStyle  }}>
            {cardtitle1} <br /> {cardtitle2}
          </h5>
          <p class="card-text mt-5 mb-5 fw-bold fw-lighter" style={{...cardstyletext1}}>
            {cardtext1} <br /> {cardtext2}
          </p>
          <p class="card-text">
            <small>
              <ButtonCards showbutton={showbutton} cardbutton={cardbutton} cardstylebutton={cardstylebutton}/>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
