// auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/auth/auth.services";
import { AuthUserInterface } from "../types";

const auth = (req: AuthUserInterface, res: Response, next: NextFunction) => {
  try {
    // back lowerCase and uperCase in the front headers - Authorization Bearer <"token">
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("❌ session expired. $no_authorizationinheader");
    }

    // split token from bearer
    const [_, token] = authorization.split(" ");

    if (!token) {
      throw new Error("❌ session expired . $no_token");
    }

    //token verification 
    const { id } = verifyToken(token) as { id: string };
    //custom mutation of the request object for having <user>
    req.user = id;

    next();
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
export default auth;
