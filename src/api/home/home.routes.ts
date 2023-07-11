//home.routes.ts
import { Router } from "express";
import {
  createHomeController,
  getAllHomesController,
  getHomeByIdController,
  updateHomeController,
  deleteHomeController,
} from "./home.controller";

const router = Router();

router.post("/", createHomeController);
router.get("/", getAllHomesController);
router.get("/:id", getHomeByIdController);
router.put("/:id", updateHomeController);
router.delete("/:id", deleteHomeController);

export default router;
