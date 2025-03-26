import React, { useState } from "react";

function ButtonCards({cardbutton,cardstylebutton}) {
  const [colorButton, setcolorButton] = useState(false);
  return (
    <div>
      <button
        type="button"
        style={{ ...cardstylebutton }}
        className={`btn  fs-5 fw-bold px-5 py-3 ${
          colorButton ? "btn-success" : "btn-warning"
        }`}
        onMouseEnter={() => setcolorButton(true)}
        onMouseLeave={() => setcolorButton(false)}
      >
        {cardbutton}
      </button>
    </div>
  );
}

export default ButtonCards;
