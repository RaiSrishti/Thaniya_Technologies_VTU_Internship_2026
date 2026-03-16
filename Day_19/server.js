const express = require("express");

const app = express();

app.use(express.json());

app.get("/data", (req, res) => {
  try {
    throw new Error("Something went wrong");
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});