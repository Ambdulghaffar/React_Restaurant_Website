import React, { createContext, useState, useContext, useEffect } from "react";

// Crée le contexte
const CartContext = createContext();

// Fournisseur du contexte
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Ajouter un produit au panier
  const addToCart = (name, price) => {
    setCart(prevCart => [...prevCart, { name, price }]);
  };

  // Supprimer un produit du panier (par nom au lieu d'index)
  const removeFromCart = (name) => {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  };

  // Calculer le total du panier
  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + parseFloat(item.price), 0));
  }, [cart]);



  return (
    <CartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook pour utiliser le contexte dans d'autres composants
export const useCart = () => {
  return useContext(CartContext);
};
