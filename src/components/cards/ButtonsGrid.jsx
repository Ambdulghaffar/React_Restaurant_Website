/* import React, { useState } from "react";

function ButtonsGrid() {
  const [ishoverd1, setIshoverd1] = useState(false);
  const [ishoverd2, setIshoverd2] = useState(false);
  return (
    <div>
      <p>
        <button className={`btn fs-5 fw-bold text-uppercase px-5 py-3 ${ishoverd1 ? "btn-success" : "btn-warning"}`}
        onMouseEnter={()=>setIshoverd1(true)}
        onMouseLeave={()=>setIshoverd1(false)}
        >
          Add to cart
        </button>
      </p>
      
      <p>
      <button className={`btn fs-5 text-uppercase fw-bold px-5 py-3 ${ishoverd2 ? "btn-success" : "btn-warning"}`}
        onMouseEnter={()=>setIshoverd2(true)}
        onMouseLeave={()=>setIshoverd2(false)}
        >
          View Product
        </button>
      </p>
      
    </div>
  );
}

export default ButtonsGrid;
 */

// ButtonsGrid.jsx
import React, { useState } from "react";

function ButtonsGrid() {
  const [ishoverd1, setIshoverd1] = useState(false);
  const [ishoverd2, setIshoverd2] = useState(false);

  return (
    <div className="buttons-container">
      <p>
        <button 
          className={`btn fs-5 fw-bold text-uppercase px-5 py-3 ${ishoverd1 ? "btn-success" : "btn-warning"}`}
          onMouseEnter={() => setIshoverd1(true)}
          onMouseLeave={() => setIshoverd1(false)}
        >
          Add to cart
        </button>
      </p>
      
      <p>
        <button 
          className={`btn fs-5 text-uppercase fw-bold px-5 py-3 ${ishoverd2 ? "btn-success" : "btn-warning"}`}
          onMouseEnter={() => setIshoverd2(true)}
          onMouseLeave={() => setIshoverd2(false)}
        >
          View Product
        </button>
      </p>
    </div>
  );
}

export default ButtonsGrid;