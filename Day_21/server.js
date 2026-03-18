const express = require("express");

const app = express();

app.use(express.json());

// Sample route with consistent response format
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is working properly",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});