import { Router } from "express";
import { User } from "../models/index.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body;
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

router.get("/", async (req, res) => {
    const users = User.findAndCountAll();
    res.status(200).json(users);
});

export { router as userRoutes };
