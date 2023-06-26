//routes.ts
import { Application, application } from "express";
import healthcheck from "./api/healthcheck/healthcheck"

const routes = (app:Application):void => {
  app.use("/api/healthcheck", healthcheck)
}
export default routes
