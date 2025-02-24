import { Router } from "express";
import { User } from "../models/index.js";

const router = Router();

router.post("/", async (req, res) => {
    try {        
        const userData = await User.create(req.body);
        res.status(200).json({
            id: userData.id,
            username: userData.username,
            email: userData.email
    });
    } catch (err) {
        res.status(400).json(err);
    }
});

export { router as userRoutes };