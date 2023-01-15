import express from "express";
import create_notes from "../controllers/notes/create_notes";
import delete_notes from "../controllers/notes/delete_notes";
import notes_readById from "../controllers/notes/notes_readById";
import read_notes from "../controllers/notes/read_notes";
import search_notes from "../controllers/notes/search_notes";
import update_notes from "../controllers/notes/update_notes";
import user_mdw from "../middleware/users_mdw";

const notes_route = express.Router();

notes_route.post("/notes/create", user_mdw, create_notes);
notes_route.get("/notes/read", user_mdw, read_notes);
notes_route.get("/notes/read/:id", user_mdw, notes_readById);
notes_route.get("/notes/search", user_mdw, search_notes);
notes_route.put("/notes/update/:id", user_mdw, update_notes);
notes_route.delete("/notes/delete/:id", user_mdw, delete_notes);

export default notes_route;
