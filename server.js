const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 3001;

// Middleware pour analyser les données JSON envoyées
app.use(express.json());

// Endpoint pour sauvegarder la commande
app.post("/save-order", (req, res) => {
  const { name, address, phone, cart } = req.body;

  // Crée un objet de commande
  const order = {
    name,
    address,
    phone,
    cart,
    orderDate: new Date().toISOString(),
  };

  // Chemin du fichier où la commande sera enregistrée
  const filePath = path.join(__dirname, "orders.json");

  // Lecture du fichier existant (si il existe)
  fs.readFile(filePath, "utf8", (err, data) => {
    let orders = [];
    if (!err) {
      orders = JSON.parse(data);
    }

    // Ajouter la nouvelle commande au tableau
    orders.push(order);

    // Sauvegarder la nouvelle liste de commandes dans le fichier
    fs.writeFile(filePath, JSON.stringify(orders, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Erreur lors de la sauvegarde de la commande." });
      }
      res.status(200).json({ message: "Commande enregistrée avec succès!" });
    });
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
