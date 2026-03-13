const express = require("express");

const app = express();

// Basic authentication middleware
const authMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username === "admin" && password === "admin123") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized access" });
  }
};

// Public route
app.get("/", (req, res) => {
  res.send("Public API endpoint");
});

// Protected route
app.get("/secure-data", authMiddleware, (req, res) => {
  res.json({ message: "This is protected data" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});