const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/internshipDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("Database Connected");

// Routes
app.use("/api", userRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});