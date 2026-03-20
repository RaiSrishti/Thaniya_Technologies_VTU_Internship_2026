const express = require("express");

const app = express();
app.use(express.json());

let users = [];

// GET
app.get("/api/users", (req, res) => {
  res.json(users);
});

// POST
app.post("/api/users", (req, res) => {
  users.push(req.body);
  res.status(201).json({ message: "User created successfully" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});