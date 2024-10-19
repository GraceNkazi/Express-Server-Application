import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
  console.log(`User Router ${req.url}`);
  next()
});

router.get("/", (req, res) => {
  res.send("Hi 👋👋👋");
});

export default router;