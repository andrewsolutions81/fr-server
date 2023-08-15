//routes.ts
import { Application, application } from "express";
import healthcheck from "./api/healthcheck/healthcheck";
import home from "./api/home/home.routes";
import user from "./api/user/user.routes";

const routes = (app: Application): void => {
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/homes", home);
  app.use("/api/users", user);
};
export default routes;

