import { request, response } from "express";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const user_mdw = async (req = request, res = response, next) => {
  try {
    const authorization = await req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        succes: false,
        message: "authorization not found",
      });
    }

    const token = await authorization.split(" ")[1];

    const verify = await jwt.verify(token, process.env.SECRET_KEY);

    if (!verify) {
      return res.status(401).json({
        succes: false,
        message: "authorization not found",
      });
    }

    console.info(verify);
    req.body.users_id = verify.id;

    next();
  } catch (error) {
    return res.status(500).json({
      succes: true,
      message: error.message,
    });
  }
};

export default user_mdw;
