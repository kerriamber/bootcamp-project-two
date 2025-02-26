import { Router } from "express";
import { auth } from "../middleware/authorization.js";
import { Post } from "../models/Post.js";
import { User } from "../models/User.js";

const router = Router();

// get multiple posts
router.get("/", async (req, res) => {
    const posts = await Post.findAll({
        include: {
            model: User,
            attributes: ["username"],
        },
    });
    res.status(200).json(posts);
});

// get post with id
router.get("/:id", async (req, res) => {
    const post = await Post.findOne({
        include: {
            model: User,
            attributes: ["username"],
        },
        where: {
            id: req.params.id,
        }
    });
    res.status(200).json(post);
});

// create a post
router.post("/", auth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            userId: req.user.id,
            text: req.body.text,
            coffee: req.body.coffee,
            joke: req.body.joke,
        });

        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

export { router as postsRoutes };
