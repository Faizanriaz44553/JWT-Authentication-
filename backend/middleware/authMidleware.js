import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/UserModel.js";

dotenv.config();

const authMidleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "Access denied, no token provided" });
  }
  try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
    
    const user = await User.findById(decode.id).select('-password -__v');
        
    if (!user) {
        return res.status(404).json({ message: "User not found in database" });
    }
    req.user = user;
    next();
  } catch (error) {
      res.status(401).json({message : "invalid token"})
  }
};

export default authMidleware