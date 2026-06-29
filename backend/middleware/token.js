import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { success, error } from "../utils/response.utils.js";
import { UsersModels } from "../models/inisiasi.models.js";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try{
    const TokenHeaders = req?.headers?.authorization;
    const token = req?.cookies?.AccessToken || (TokenHeaders && TokenHeaders.startsWith("Bearer ") ? TokenHeaders.split(" ")[1] : null);

    if(!token) return error(res, 404, "Token tidak dapat ditemukan!");

    const decoded = jwt.verify(token, process.env.APP_ACCESS_SECRET);

    req.user = await UsersModels.findByPk(decoded.uuid, {
      attributes: {exlude: ["password"]}
    });

    next();
  }catch(err){

    if(err.name === "TokenExpiredError") return error(res, 401, "Token sudah kedaluarsa!", err.message);
    error(res, 500, err.message, err)
  }
}

export const verifyRefreshToken = async (req, res, next) => {
  try{
    const TokenHeader = req.headers.authorization;
    const token = req?.cookies?.RefreshToken || (TokenHeader && TokenHeader.startsWith("Bearer ") ? TokenHeader.split(" ")[1] : null);

    if(!token) return error(res, 404, "Token tidak dapat ditemukan!");

    const decoded = jwt.verify(token, process.env.APP_REFRESH_SECRET);

    req.user = await UsersModels.findByPk(decoded.uuid, {
      attributes: { exclude: ["password"] }
    });

    next();

  }catch(err){
    if(err.name === "TokenExpiredError") return error(res, 401, "Token sudah kedaluarsa", err.message);

    error(res, 500, err.message, err);
  }
}

