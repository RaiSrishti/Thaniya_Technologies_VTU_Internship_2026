require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Connect database using environment variable
mongoose.connect(process.env.DB_URL);

console.log("Database Connected");

// Sample route
app.get("/", (req, res) => {
  res.send("Server running with environment variables");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});