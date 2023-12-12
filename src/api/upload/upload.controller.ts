import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response, NextFunction } from "express";

const uploadSingleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { file } = req as any;

  const size = file.size / 1024 / 1024; // MB

  if (size > 2) {
    return res.status(400).json({
      message: "File size is too big",
    });
  }

  try {
    const result = await cloudinary.uploader.upload(file.path, {
      folder: "assets",
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      resource_type: "auto",
    });
    return res.json(result);
  } catch (error) {
    return res.status(500).json(error);
  } finally {
    fs.unlinkSync(file.path);
  }
};

const uploadMultipleHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { files } = req as any;
  let results: any = [];

  for (const file of files) {
    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "assets",
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        resource_type: "auto",
      });
      result.original_filename = file.originalname
      results.push(result);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    } finally {
      fs.unlinkSync(file.path);
    }
  }
  return res.json(results);
};

export { uploadSingleHandler, uploadMultipleHandler };
