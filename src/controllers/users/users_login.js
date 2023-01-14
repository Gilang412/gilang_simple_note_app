import { request, response } from "express";
import db from "../../../prisma/connection";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

export const user_login = async (req = request, res = response) => {
  try {
    const { email } = await req.body;

    const result_login = await db.users.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
      },
    });

    if (!result_login) {
      return res.status(404).json({
        succes: false,
        message: "email not found",
      });
    }

    const token = await jwt.sign(
      {
        id: result_login.id,
        email: result_login.email,
      },
      process.env.SECRET_KEY
    );
    return res.status(201).json({
      succes: true,
      message: "succesfull login",
      token: token,
      query: result_login,
    });
  } catch (error) {
    return res.status(201).json({
      succes: false,
      message: error.message,
    });
  }
};

export default user_login;
