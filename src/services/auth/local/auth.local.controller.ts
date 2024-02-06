// auth.local.controller.ts
import { createUserService } from "../../../api/user/user.service";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { loginService } from "../auth.services";
import { signToken } from "../auth.services";
import { getNumbers } from "../../stringToNumber";

export const singupController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password, phone_number } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await createUserService({
      ...req.body,
      password: encryptedPassword,
    });

    const token = signToken({ id: user.id });

    res.status(201).json({
      message: "✅ successful user signup:",
      data: { username, email },
      token,
    });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await loginService(email);

    if (!user) {
      throw new Error("❌ wrong credentials. $_no_user_email_login");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("❌ wrong credentials. $_no_valid_password");
    }

    const { id, username } = user;

    const token = signToken({ id: user.id });

    res.status(201).json({
      message: "✅ successful user login:",
      data: { username, email, id },
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
