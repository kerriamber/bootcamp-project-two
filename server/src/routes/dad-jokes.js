import { Router } from "express";
const router = Router();

router.get("/joke", async (_req, res) => {
  // This route did not require an api key, so we just
  // put it on the backend anyway to show we know how
  // to protect our API keys

  const joke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  res.json(joke);
});

export { router as dadJokeRoutes };
