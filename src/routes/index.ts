import express from "express";
import userRouter from "./user.routes";
import transactionRouter from "./transaction.routes";

const routes = express();

routes.use("/users", userRouter);
routes.use("/transactions", transactionRouter);

export default routes;
