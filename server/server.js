const express = require("express");
const dotenv = require("dotenv");
const Database = require("./config/db");
const authRouter = require("./routers/authRouters");
const productRouter = require("./routers/productRoutes");

dotenv.config(); // 👈 sabse upar

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Route
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/auth", productRouter);

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
