//PACKAGE
import express from "express";
import cors from "cors";
import path from "path";
import env from "dotenv";
import users_routes from "./src/routes/users_routes";
import notes_route from "./src/routes/notes_route";
env.config();
const app = express();
const PORT = process.env.PORT;

//MIDDLEWARE
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use(users_routes);
app.use(notes_route);
//LISTENER
app.listen(PORT, () => {
  console.log(`listen port PORT ${PORT}`);
});
