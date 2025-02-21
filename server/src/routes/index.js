import { Router } from "express";
import { userRoutes } from "./users.js";
import { postsRoutes } from "./posts.js";
import { dadJokeRoutes } from "./dad-jokes.js";
import { randomCoffeeRoute } from "./random-coffee.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/posts", postsRoutes);
router.use("/dad-jokes", dadJokeRoutes);
router.use("/random-coffee", randomCoffeeRoute);

export { router as apiRoutes };
