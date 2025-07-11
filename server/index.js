// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
    { id: 1, name: "T-Shirt", price: 20 },
    { id: 2, name: "Jeans", price: 40 },
    { id: 3, name: "Sneakers", price: 60 },
];

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});