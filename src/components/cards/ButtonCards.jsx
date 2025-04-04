import React, { useState} from "react";
import {Link} from 'react-router-dom'

function ButtonCards({cardbutton,cardstylebutton, showbutton = true}) {
  const [colorButton, setcolorButton] = useState(false);
  return (
    <div>
  { showbutton &&  <Link to="/menu"
        style={{ ...cardstylebutton }}
        className={`btn fs-5 fw-bold px-5 py-3 merriweather ${
          colorButton ? "btn-success" : "btn-warning"
        }`}
        onMouseEnter={() => setcolorButton(true)}
        onMouseLeave={() => setcolorButton(false)}
      >
        {cardbutton}
      </Link>}
    </div>
  );
}

export default ButtonCards;
