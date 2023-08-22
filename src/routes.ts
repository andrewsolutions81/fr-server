//routes.ts
import { Application, application } from "express";
import { healthcheck } from "./api/healthcheck";
import { home } from "./api/home";
import { user } from "./api/user";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/homes", home);
  app.use("/api/users", user);
};
export default routes;

