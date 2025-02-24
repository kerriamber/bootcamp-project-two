import { Router } from "express";
import { User } from "../models/index.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/", async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

export { router as userRoutes };
