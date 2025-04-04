import React, { useState } from "react";
import { useCart } from "./CartContext";
import { FaTrash } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Cart({ cartTitle, cartButton, onConfirm }) {
  const { cart, removeFromCart } = useCart();
  return (
    <>
      <div className="row">
        <div className="col" style={{ height: "400px" }}>
          <div
            className="card h-100 bg-secondary-subtle"
            style={{ maxHeight: "1000px", overflowY: "auto" }}
          >
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
            <Button cartButton={cartButton} onConfirm={onConfirm} />
          </div>
        </div>
      </div>
    </>
  );

  function Button({ cartButton, onConfirm }) {
    const { total } = useCart();
    const [hoverButton, setHoverButton] = useState(false);
    const location = useLocation(); // // Récupère l'URL de la page actuelle

    return (
      <div
        className={`card-footer ${hoverButton ? "bg-success" : "bg-warning"}`}
        style={{ cursor: "pointer" }}
        onMouseEnter={() => setHoverButton(true)}
        onMouseLeave={() => setHoverButton(false)}
      >
        {location.pathname === "/commandes" ? (
          <small
            className="text-white h5"
            onClick={location.pathname === "/commandes" ? onConfirm : undefined}
          >
            {cartButton} - {total} Є
          </small>
        ) : (
          <Link to="/commandes" className="text-decoration-none">
            <small className="text-white h5">
              {cartButton} - {total} Є
            </small>
          </Link>
        )}
      </div>
    );
  }
}

export default Cart;
