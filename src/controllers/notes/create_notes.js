import { request, response } from "express";
import db from "../../../prisma/connection";

const create_notes = async (req = request, res = response) => {
  try {
    const data = await req.body;

    const create_result = await db.notes.create({
      data: {
        title: data.title,
        notes: data.notes,
        users_id: data.users_id,
      },
    });
    return res.status(201).json({
      succes: true,
      message: "succesfull create notes",
      note: create_result,
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
};

export default create_notes;
