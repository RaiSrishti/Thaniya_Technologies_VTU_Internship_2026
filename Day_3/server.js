//Basic Express Server, Routes, and Middleware
const express = require("express");
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, URL: ${req.url}`);
  next();
});

// Route: Home
app.get("/", (req, res) => {
  res.send("Welcome to the Backend Server!");
});

// Route: About
app.get("/about", (req, res) => {
  res.json({
    message: "This is the About route",
    status: "Success"
  });
});

// Route: Contact
app.post("/contact", (req, res) => {
  res.send("Contact form submitted");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});