import express, {
  Application,
  urlencoded,
  Request,
  Response,
  NextFunction,
} from "express";
import morgan from "morgan";
import cors from "cors";

// Middlewares
const configExpress = (app: Application): void => {
  // Logging middleware
  app.use(morgan("dev"));

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // CORS middleware
  app.use(cors());

  // Error handling middleware
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error("❌ error:", err);
    res.status(500).send(`Something went wrong :${err}`);
  });
};

export default configExpress;

