import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup pour __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware CORS ici 👇
app.use(cors());

// Middleware JSON
app.use(express.json());

// Route POST
app.post("/save-order", (req, res) => {
  const { name, address, phone, cart } = req.body;

  const order = {
    name,
    address,
    phone,
    cart,
    orderDate: new Date().toISOString(),
  };

  const filePath = path.join(__dirname, "orders.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    let orders = [];
    if (!err && data) {
      orders = JSON.parse(data);
    }

    orders.push(order);

    fs.writeFile(filePath, JSON.stringify(orders, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Erreur lors de la sauvegarde de la commande." });
      }
      res.status(200).json({ message: "Commande enregistrée avec succès!" });
    });
  });
});

// Lancement serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
