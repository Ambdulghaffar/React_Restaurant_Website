import BannerZoom from "../../components/cards/BannerZoom";
import Cart from "../../components/Menu/Cart";
import Footer from "../../components/body/Footer";

function Commandes() {
  return (
    <>
      <BannerZoom title="Votre Commande" />
      <div className="container h4 fw-bold mt-5 py-3 text-center bg-secondary text-white">
        Veuillez Confirmer votre commande
      </div>

      <div>
        {/* Affichage conditionnel de la grille */}
        <div className="container  my-4">
          <div className="row">
            <div className="col-7 border border-1 bg-secondary-subtle">
              <p className="text-center my-4 h4 fw-bold">
                Détails de la commande
              </p>
              <div className="m-5 border border-2 bg-white p-5">
                <form>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      Nom Complet
                    </label>
                    <input type="text" className="form-control bg-secondary-subtle" id="name" />
                  </div>
                  <div className="mb-3 ">
                    <label for="address" className="form-label">
                      Adresse
                    </label>
                    <input type="text" className="form-control bg-secondary-subtle" id="address" />
                  </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">
                      Téléphone
                    </label>
                    <input type="phone" className="form-control bg-secondary-subtle" id="phone" />
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
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Commandes;
