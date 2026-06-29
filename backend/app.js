import express from "express";
import cors from "cors";
import session from "express-session";
import CookieParser from "cookie-parser";
import dotenv from "dotenv";
import db from "./config/database.js";
import path from "path";
import {
  AuthRouter,
  UsersRouter,
  CategoryRouter,
  DatabaseRouter,
  ProjectRouter,
  TechStackRouter,
} from "./router/inisiasi.router.js";

const app = express();

(async () => {
  db.sync();
})();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  }),
);

app.use(
  session({
    secret: process.env.APP_SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
    },
  }),
);

app.use(CookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", AuthRouter);
app.use("/api/users", UsersRouter);
app.use("/api/category", CategoryRouter);
app.use("/api/database", DatabaseRouter);
app.use("/api/project", ProjectRouter);
app.use("/api/tech_stack", TechStackRouter);

app.listen(process.env.APP_PORT, () =>
  console.log("Server Sedang Berjalan...."),
);
