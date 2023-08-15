// user.controller.ts
import { Request, Response, NextFunction } from "express";
import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
} from "./user.service";

export const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await createUserService(req.body);
    res
      .status(201)
      .json({ message: "✅ successful user creation:", data: newUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsersController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json({ message: "✅ All users found:", data: users });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userById = await getUserByIdService(id);
    if (!userById) {
      res.status(404).json({ message: "❌ Single user NOT found." });
    }
    res.status(200).json({ message: "✅ Single user found:", data: userById });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const userUpdate = await updateUserService(id, req.body);
    if (!userUpdate) {
      res.status(404).json({ message: "❌ user to update NOT found." });
    }
    res.status(202).json({ message: "✅ user updated:", data: userUpdate });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const existingUser = await getUserByIdService(id);
    if (!existingUser) {
      res.status(404).json({ message: "❌ user to delete not found." });
      return;
    }
    const userDelete = await deleteUserService(id);
    res
      .status(204)
      .json({ message: "✅ user delete successful:", data: existingUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
