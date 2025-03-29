import { useContext } from "react";
import { CartContext } from "./CartContext"; // Assure-toi que le chemin est correct

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
