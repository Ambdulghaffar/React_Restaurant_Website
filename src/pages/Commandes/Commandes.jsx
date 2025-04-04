import React from "react";
import BannerZoom from "../../components/cards/BannerZoom";
import Cart from "../../components/Menu/Cart";
import Footer from "../../components/body/Footer";
import { useState } from "react";
import { useCart } from "../../components/Menu/CartContext";
import { useCommandes } from "../../components/Menu/CommandesContext";

function Commandes() {
  const {handleConfirmOrder,handleInputChange}= useCommandes();
/*   const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

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
  }; */

  return (
    <>
      <BannerZoom title="Votre Commande" />
      <div className="container h4 fw-bold mt-5 py-3 text-center bg-secondary merriweather text-white">
        Veuillez Confirmer votre commande
      </div>

      <div>
        {/* Affichage conditionnel de la grille */}
        <div className="container  my-4">
          <div className="row">
            <div className="col-7 border border-1 bg-secondary-subtle">
              <p className="text-center my-4 h4 merriweather  fw-bold">
                Détails de la commande
              </p>
              <div className="m-5 border border-2 bg-white p-5">
                <form>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="name"
                      name="name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3 ">
                    <label for="address" className="form-label">
                      Adresse
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary-subtle"
                      id="address"
                      name="address"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">
                      Téléphone
                    </label>
                    <input
                      type="phone"
                      className="form-control bg-secondary-subtle"
                      id="phone"
                      name="phone"
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* Panier */}
            <div className="col"></div>
            <div className="col-4 text-center">
              <Cart
                cartTitle="Récapitulatif"
                cartButton="Confirmer la commande"
                onConfirm={handleConfirmOrder}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Commandes;
