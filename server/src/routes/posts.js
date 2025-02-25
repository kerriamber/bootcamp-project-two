import { Router } from "express";
import { auth } from "../middleware/authorization.js";

const router = Router();

// get multiple posts
router.get("/", async (req, res) => {
    
});

// get post with id
router.get("/:id", async (req, res) => {

});

// create a post
router.post("/", auth, async (req, res) => {
    // temp just to test auth middleware
    res.status(200).send('auth success');
});

export { router as postsRoutes };
