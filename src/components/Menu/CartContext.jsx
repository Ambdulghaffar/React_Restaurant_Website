import React, { createContext, useState, useContext, useEffect } from "react";

// Crée le contexte
const CartContext = createContext();

// Fournisseur du contexte
export const CartProvider = ({ children }) => {
  // Charger depuis localStorage s'il y a un panier sauvegardé
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Calculer le total du panier
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + parseFloat(item.price), 0));

    // Sauvegarder dans localStorage à chaque changement du panier
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Ajouter un produit au panier
  const addToCart = (name, price) => {
    setCart((prevCart) => [...prevCart, { name, price }]);
  };

  // Supprimer un produit du panier (par nom au lieu d'index)
  const removeFromCart = (name) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.name === name);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1); //supprimer un seul element
        return updatedCart;
      }
      return prevCart;
    });
  };

  // Vider le panier
  const clearCart = () => {
    setCart([]); // Réinitialise le panier
    localStorage.removeItem("cart"); // Enlève le panier du localStorage
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook pour utiliser le contexte dans d'autres composants
export const useCart = () => {
  return useContext(CartContext);
};


