// auth.local.controller.ts
import { createUserService } from "../../../api/user/user.service";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { login } from "../auth.services";
import { signToken } from "../auth.services";
// import { sendNodeMailer } from "../../config/nodemailer";
// import { welcomeEmail } from "../../utils/emails";

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

    // const token = signToken({ id: user.id });
    const token = "i will be a token";

    // await sendNodeMailer(welcomeEmail(user));

    res.status(201).json({
      message: "✅ successful user signup:",
      // data: { username, email },
      data: { user },
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await login(email);

    if (!user) {
      throw new Error("Email o contraseña invalido");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new Error("Email o contraseña invalido");
    }

    const { id, username } = user;

    const token = signToken({ id: user.id });

    res.status(201).json({
      message: "User login successfully",
      data: { email, username },
      token,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
