import React, { createContext, useState, useContext } from "react";

// Crée le contexte
const CartContext = createContext();

// Fournisseur du contexte
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  // Ajouter un produit au panier
  const addToCart = (name, price) => {
    setCart([...cart, { name, price }]);
  };

  // Supprimer un produit du panier
  const removeFromCart = (index) => {
    const newCart = cart.filter((item, idx) => idx !== index);
    setCart(newCart);
  };

  // Calculer le total du panier
  const getTotal = () => {
    return cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook pour utiliser le contexte dans d'autres composants
export const useCart = () => {
  return useContext(CartContext);
};
