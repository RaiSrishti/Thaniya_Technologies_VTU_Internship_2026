// Import express
const express = require("express");

// Initialize app
const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Day 2 Backend Server is Running");
});

// Sample API
app.get("/api/info", (req, res) => {
  res.json({
    message: "Learning backend fundamentals",
    day: "Day 2"
  });
});

// Server port
const PORT = 4000;

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});