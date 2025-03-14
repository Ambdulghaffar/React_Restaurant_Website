import React from "react";
import { FaStar } from "react-icons/fa6";
import pizza4 from "../../assets/pizza4.jpg";

function Grid() {
  function IconLoop({ count }) {
    let icons = [];
    for (let i = 0; i < count; i++) {
      icons.push(<FaStar className="text-warning me-1" key={i} size={20} />);
    }
    return <p>{icons}</p>;
  }
  return (
    <div>
          <div class="col">
            <div class="card h-100">
              <p className="text-center mt-5 ">
                <img
                  src={pizza4}
                  style={{ width: "200px", height: "auto" }}
                  alt=""
                  className="bg-light"
                />
              </p>
              <div class="card-body">
                <h5 class="card-titlel ms-3">
                  <IconLoop count={5} />
                </h5>
                <p class="card-text ms-3">Margharita Pizza</p>
                <div className="d-flex ">
                  <p className="ms-3 text-secondary text-decoration-line-through">
                    $40.00
                  </p>
                  <p className="ms-2 text-info">$24.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Grid;
