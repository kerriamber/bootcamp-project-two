import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import sequelize from "./db/connection.js";
import { apiRoutes } from "./routes/index.js";
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if the app is running production mode, then use client/dist for
// all the client side file serving!
if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  app.use(express.static(path.join(__dirname, "../../client/dist")));
}

app.use("/api", apiRoutes);

app.get("/api/test", (_req, res) => res.send("testing api! it works!"));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
  });
});
