import { Router } from "express";
import { userRoutes } from "./users.js";
import { postsRoutes } from "./posts.js";
import { dadJokeRoutes } from "./dad-jokes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/posts", postsRoutes);
router.use("/dad-jokes", dadJokeRoutes);

export { router as apiRoutes };
