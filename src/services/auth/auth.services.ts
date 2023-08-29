// auth.services.ts
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET = process.env.SECRET_KEY as string;

export const loginService = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const signToken = (payload: any) => {
  const token = jwt.sign(payload, SECRET, { expiresIn: 60 * 60 * 24 });

  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (error) {
    return false;
  }
};
