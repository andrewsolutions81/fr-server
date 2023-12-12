//routes.ts
import { Application } from "express";
import healthcheck from "./api/healthcheck/healthcheck";
import home from "./api/home/home.routes";
import user from "./api/user/user.routes";
import authLocal from "./services/auth/local/auth.local.routes";
import upload from "./api/upload/upload.routes";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/homes", home);
  app.use("/api/users", user);
  app.use("/auth/local", authLocal);
  app.use("/api/upload", upload);
};

export default routes;

