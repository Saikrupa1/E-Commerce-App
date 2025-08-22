const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Smartphone", price: 599 },
  { id: 3, name: "Headphones", price: 199 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

// Export the app for testing
module.exports = app;

// Start server only if this file is run directly
if (require.main === module) {
  app.listen(5000, () => {
    console.log("API running on http://localhost:5000");
  });
}
