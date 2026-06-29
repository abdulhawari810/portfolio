import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.APP_ACCESS_SECRET, { expiresIn: "1d" });
};

export const generateRefreshToken = (payload, remember) => {
  return jwt.sign(payload, process.env.APP_REFRESH_SECRET, {
    expiresIn: remember ? "30d" : "3d",
  });
};
