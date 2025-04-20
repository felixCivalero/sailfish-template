// src/routes/auth.ts
import express from "express";
import { verifySupabaseToken } from "../middleware/verifySupabaseToken";

const router = express.Router();

// Secure endpoint
router.get("/me", verifySupabaseToken, (req, res) => {
  const user = (req as any).user;
  res.json({ user });
});

export default router;
