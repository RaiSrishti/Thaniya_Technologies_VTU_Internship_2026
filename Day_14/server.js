const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/internshipDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("Database Connected");

// Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

// Model
const Product = mongoose.model("Product", productSchema);

// Create Product
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Get Products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});