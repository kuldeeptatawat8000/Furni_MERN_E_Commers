const express = require("express");
const dotenv = require("dotenv");
const Database = require("./config/db");

dotenv.config(); // 👈 sabse upar

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.send("Hiii");
});

// Database connect FIRST
Database();

// Server listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
