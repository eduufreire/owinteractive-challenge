import { Request, Response, Router } from "express";
import { createTransactionController } from "../use-cases/transaction/create";
import { getAllTransactionController } from "../use-cases/transaction/get-all-user";

const transactionRouter = Router();

transactionRouter.post("/", (request: Request, response: Response) => {
	createTransactionController.handler(request, response);
});

transactionRouter.get("/:id", (request: Request, response: Response) => {
	getAllTransactionController.handler(request, response);
});

export default transactionRouter;
