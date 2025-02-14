import { Router } from "express";
const router = Router();

router.use("/users", userRoutes);
router.use("/posts", postsRoutes);

export { router as apiRoutes };
