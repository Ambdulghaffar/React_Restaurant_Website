import React, { useState } from "react";
import { useCart } from "./CartContext";
import { FaTrash } from "react-icons/fa";

function Cart({ cartTitle, cartButton }) {
  const [hoverButton, setHoverButton] = useState(false);
  const { cart, total, removeFromCart } = useCart();
  return (
    <>
      <div className="row">
        <div className="col" style={{ height: "400px" }}>
          <div className="card h-100 bg-secondary-subtle">
            {cart.length > 0 ? (
              <div className="card-body">
                <h5 className="card-title">{cartTitle}</h5>
                <hr />
                {cart.map((item, index) => (
                  <p
                    key={index}
                    className="card-text d-flex justify-content-between"
                  >
                    <span>{item.name}</span>
                    <span>{item.price} Є</span>
                    <span
                      className="text-danger"
                      onClick={() => removeFromCart(item.name)}
                      style={{ cursor: "pointer" }}
                    >
                      <FaTrash size={12} />
                    </span>
                  </p>
                  
                ))}
              </div>
            ) : (
              <div>
                <h5 className="card-title my-3">{cartTitle}</h5>
                <p>Votre panier est vide.</p>
              </div>
            )}
            <div
              className={`card-footer ${
                hoverButton ? "bg-success" : "bg-warning"
              }`}
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
            >
              <small className="text-white h5">
                {cartButton} - {total} Є
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
