// user.routes.ts
import { Router } from "express";
import {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  getUserBySecureIdController,
  updateUserController,
  deleteUserController,
} from "./user.controller";
import auth from "../../middleware/auth.middleware";

const router = Router();

router.post("/", createUserController);
router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.get("/secure/:id", auth, getUserBySecureIdController);
router.put("/", auth, updateUserController);
router.delete("/:id", auth, deleteUserController);

export default router;
