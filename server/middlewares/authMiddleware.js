const jwt = require("jsonwebtoken");
const authModel = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    //Get token for auth
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "Access denied, No token provided",
      });
    }
    //Extract token
    const token = authHeader.split(" ")[1];

    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //Get user for database
    req.user = await authModel.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User Not found",
      });
    }

    next();
  } catch (error) {
    console.log("Auth Middleware Error", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;
