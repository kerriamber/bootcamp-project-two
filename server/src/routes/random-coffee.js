import { Router } from "express";
const router = Router();

router.get("/", async (_req, res) => {
  // This route did not require an api key, so we just
  // put it on the backend anyway to show we know how
  // to protect our API keys

  const response = await fetch("https://coffee.alexflipnote.dev/random.json");
  const data = await response.json();
  const { file } = data;

  res.json({ src: file });
});

export { router as randomCoffeeRoute };
