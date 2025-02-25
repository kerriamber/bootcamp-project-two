import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import sequelize from "./db/connection.js";
import { apiRoutes } from "./routes/index.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// if the app is running production mode, then use client/dist for
// all the client side file serving!
if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  app.use(express.static(path.join(__dirname, "../../client/dist")));
}

app.use("/api", apiRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
  });
});
