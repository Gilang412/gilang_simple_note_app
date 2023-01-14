import express from "express";
import create_users from "../controllers/users/users_create";
import user_login from "../controllers/users/users_login";
import users_read from "../controllers/users/users_read";
import user_mdw from "../middleware/users_mdw";

const users_routes = express.Router();

users_routes.post("/user/create", create_users);
users_routes.post("/user/login", user_login);
users_routes.get("/user/read", users_read);

export default users_routes;
