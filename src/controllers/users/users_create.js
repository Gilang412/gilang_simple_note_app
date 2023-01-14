import { request, response } from "express";
import db from "../../../prisma/connection";
import jwt from "jsonwebtoken";
import env from "dotenv";
env.config();

const create_users = async (req = request, res = response) => {
  try {
    const { email, password } = await req.body;

    const create_result = await db.users.create({
      data: { email: email, password: password },
    });

    const token = await jwt.sign(
      {
        id: create_result.id,
        email: create_result.email,
      },
      process.env.SECRET_KEY
    );

    return res.status(201).json({
      succes: true,
      message: "create succesfull",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

export default create_users;
