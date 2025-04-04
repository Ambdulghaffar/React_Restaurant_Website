import React, { useState, useEffect, useContext } from "react";
import { useCart } from "./CartContext";

// Créer un contexte pour les commandes
const CommandesContext = React.createContext();

export const FormProvider = ({ children }) => {
  const { cart, clearCart } = useCart(); // Utiliser le hook useCart pour obtenir cart et clearCart

  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem("formData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : { name: "", address: "", phone: "" };
  });

  // Sauvegarder les données du formulaire dans localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    // Vérification des champs
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    const orderData = {
      ...formData,
      cart,
    };

    // Envoyer la commande au serveur
    fetch("http://localhost:3001/save-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Commande enregistrée !");
        setFormData({ name: "", address: "", phone: "" }); // Réinitialiser le formulaire
        clearCart(); // Vider le panier
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi :", err);
        alert("Erreur lors de l'envoi de la commande.");
      });
  };

  return (
    <CommandesContext.Provider
      value={{
        handleConfirmOrder,
        handleInputChange,
        setFormData,
        formData,
      }}
    >
      {children}
    </CommandesContext.Provider>
  );
};

// Hook pour utiliser le contexte des commandes
export const useCommandes = () => {
  return useContext(CommandesContext);
};
