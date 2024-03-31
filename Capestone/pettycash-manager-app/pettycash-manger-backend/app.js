import express from "express";
import cors from "cors";
import { dataBaseConnection } from "./db.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./routers/Transactions.js";
import userRoutes from "./routers/userRouter.js";
dotenv.config({ path: "./.env" });
const app = express();

const port = process.env.PORT;

dataBaseConnection();

// Middleware
app.use(express.json());
app.use(
  cors()
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
