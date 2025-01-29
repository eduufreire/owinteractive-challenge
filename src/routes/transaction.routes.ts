import { Request, Response, Router } from "express";
import { createTransactionController } from "../use-cases/transaction/create";
import { getAllTransactionController } from "../use-cases/transaction/get-all-user";
import { deleteTransactionController } from "../use-cases/transaction/delete";
import { getBalanceController } from "../use-cases/transaction/get-balance";

const transactionRouter = Router();

transactionRouter.post("/", (request: Request, response: Response) => {
	createTransactionController.handler(request, response);
});

transactionRouter.get("/:id", (request: Request, response: Response) => {
	getAllTransactionController.handler(request, response);
});

transactionRouter.get("/balance/:id", (request: Request, response: Response) => {
	getBalanceController.handler(request, response);
});

transactionRouter.delete("/:id", (request: Request, response: Response) => {
	deleteTransactionController.handler(request, response);
});

export default transactionRouter;
