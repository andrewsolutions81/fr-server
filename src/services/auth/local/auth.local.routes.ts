// auth.local.routes.ts
import { Router } from "express";
import { singupController, loginController } from "./auth.local.controller";

const router = Router();

router.post("/signup", singupController);
router.post("/login", loginController);

export default router;
