const express = require("express");

const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  res.status(201).json({
    message: "User created successfully",
    data: req.body,
  });
});

app.get("/users", (req, res) => {
  res.json({ message: "List of users returned" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});