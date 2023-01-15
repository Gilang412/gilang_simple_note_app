import { request, response } from "express";
import db from "../../../prisma/connection";

const search_notes = async (req = request, res = response) => {
  try {
    const { query } = req.query;

    const search_result = await db.notes.findMany({
      where: {
        title: {
          contains: query,
        },
      },
    });

    return res.status(201).json({
      success: true,
      query: search_result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default search_notes;
