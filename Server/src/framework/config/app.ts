import express, { Express } from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import morgan from "morgan";

// error middleware
import errorHandlerMiddleware from "../middleware/error.middleware";

// routers
import authRouter from "../router/auth.router";
import habitRouter from "../router/habit.router";

const app: Express = express();

const CORS_ORIGIN: string = process.env.CORS_ORIGIN ?? "http://localhost:4200";

app.use(cors({
    origin: [CORS_ORIGIN],
    credentials: true
}));

//for parseing cookie data
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev")); // Loging all http requests in detail

app.use("/auth", authRouter); // auth router

app.use("/api", habitRouter); // habit router

app.use(errorHandlerMiddleware); // error Handling Midlleware

export default app;