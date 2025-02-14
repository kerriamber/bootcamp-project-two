import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/connection.js";
import { apiRoutes } from "./routes/index.js";
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.get("/api/test", (_req, res) => res.send("testing api! it works!"));

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Express Server listening on port ${PORT}`);
  });
});
