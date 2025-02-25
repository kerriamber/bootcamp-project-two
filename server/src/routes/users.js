import { Router } from "express";
import { User } from "../models/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post("/", async (req, res) => {
    try {
        // destructure req.body so users can't pass in an id
        // and give themselves any (non-used) id they want
        const { username, email, password } = req.body;

        const userData = await User.create({
            username: username,
            email: email,
            password: password,
        });

        res.status(200).json({
            id: userData.id,
            username: userData.username,
            email: userData.email
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const { JWT_SECRET } = process.env;
    const ONE_HOUR = 60 * 60 * 1000;

    if (!JWT_SECRET) throw new Error("No JWT_SECRET found!");

    const user = await User.findOne({
        where: { username }
    });

    if (!user) {
        return res.status(401).json({
            message: "Auth failed!"
        });
    }

    const pwValid = await bcrypt.compare(password, user.password);
    if (!pwValid) {
        return res.status(401).json({
            message: "Auth failed!"
        });
    }

    const token = jwt.sign({ id: user.id, username: username }, JWT_SECRET, { expiresIn: '1h' });

    res.cookie("token", token, {
        expires: new Date(Date.now() + ONE_HOUR),
        httpOnly: true
    });

    res.status(200).json({ message: "auth successful!" });
});

export { router as userRoutes };