import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/api/test", (_req, res) => res.send("testing api! it works!"));

app.listen(PORT, () => {
  console.log(`Express Server listening on port ${PORT}`);
});
