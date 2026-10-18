import User from "../models/UserModel.js";
import bcript from "bcrypt";
import jwt from "jsonwebtoken";
import env from "dotenv";
import sendEmail from "../utils/sendEmail.js";
env.config();

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "email already exists" });
    }
    const userPass = await bcript.genSalt(10);
    const setPass = await bcript.hash(password, userPass);

    user = new User({
      name,
      email,
      password: setPass,
    });
    user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({ message: "enter email or password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "invalid email!" });
    }
    const isMatch = await bcript.compare(password, user?.password);
    if (!isMatch) {
      return res.status(401).json({ message: "invalid password!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
const logoutController = (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const forgetController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "email doesn exist!" });
    }
    const secret = process.env.JWT_SECRET + user?.password;
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "15m" });

    const url = `https://localhost:8000/${token}&id=${user?._id}`;
    const message = `You requested a password reset. Click this link to reset it: \n\n ${url}`;

    const mailsent = await sendEmail({
      email:user.email,
      subject: "password reset request",
      message,
    });
  
    if (mailsent) {
      return res.status(200).json({ message: "email sent successfully!" });
      
    } else {
      return res.status(404).json({ message: "something went wrong while sending email!" });
    }
  } catch (error) {
    res.status(401).json({ message: "something went wrong from server!" });
  }
};

export {
  registerController,
  loginController,
  logoutController,
  forgetController,
};
