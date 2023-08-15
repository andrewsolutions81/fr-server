//home.controller.ts
import { Request, Response, NextFunction } from "express";
import {
  createHomeService,
  getAllHomesService,
  getHomeByIdService,
  updateHomeService,
  deleteHomeService,
} from "./home.service";

export const createHomeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newHome = await createHomeService(req.body);
    res
      .status(201)
      .json({ message: "✅ successful home creation:", data: newHome });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllHomesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const homes = await getAllHomesService();
    res.status(200).json({ message: "✅ All homes found:", data: homes });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getHomeByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const homeById = await getHomeByIdService(id);
    if (!homeById) {
      res.status(404).json({ message: "❌ Single home NOT found." });
    }
    res.status(200).json({ message: "✅ Single home found:", data: homeById });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updateHomeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const homeUpdate = await updateHomeService(id, req.body);
    if (!homeUpdate) {
      res.status(404).json({ message: "❌ home to update NOT found." });
    }
    res.status(202).json({ message: "✅ home updated:", data: homeUpdate });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteHomeController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const existingHome = await getHomeByIdService(id);
    if (!existingHome) {
      res.status(404).json({ message: "❌ Home to delete not found." });
      return;
    }
    const homeDelete = await deleteHomeService(id);
    res
      .status(204)
      .json({ message: "✅ home delete successful:", data: existingHome });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

