const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/product", authMiddleware, (req, res) => {
  res.status(201).json({
    success: true,
    message: "You are Protucted",
  });
});

module.exports = router;
