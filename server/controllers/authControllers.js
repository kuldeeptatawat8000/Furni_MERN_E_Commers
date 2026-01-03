const authModel = require("../models/User");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/passwordCheck");
const generateToken = require("../utils/generateToken");


module.exports.authRegister = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Validation
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check existing user
    const existUser = await authModel.findOne({ email });
    if (existUser) {
      return res.status(409).json({
        success: false,
        message: "User already registered, please login",
      });
    }

    //Check Password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await authModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    //Create Token
    const token = await generateToken(user);

    res.cookie("token", token, {
      httpOnly: true, // 🔐 XSS protection
      secure: false, // true in production (HTTPS)
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports.authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check existing user
    const existUser = await authModel.findOne({ email });
    if (!existUser) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are not Match",
      });
    }

    //Check Password
    const comparedPassword = await comparePassword(
      password,
      existUser.password
    );

    if (!comparedPassword) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are not Match",
      });
    }

    //Create Token
    const token = await generateToken(existUser);

    res.cookie("token", token, {
      httpOnly: true, // 🔐 XSS protection
      secure: false, // true in production (HTTPS)
      sameSite: "strict", // CSRF protection
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      success: true,
      message: "User Login successfully",
      user: {
        id: existUser._id,
        name: existUser.name,
        email: existUser.email,
        phone: existUser.phone,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
