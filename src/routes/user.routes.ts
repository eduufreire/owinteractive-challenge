import { Request, Response, Router } from "express";
import { createController } from "../use-cases/user/create";
import { getUserController } from "../use-cases/user/get-user";
import { getAllUserController } from "../use-cases/user/get-all";
import { deleteController } from "../use-cases/user/delete";
import { initialBalanceController } from "../use-cases/user/initial-balance";

const userRouter = Router();

userRouter.post("/", (request: Request, response: Response) => {
	createController.handler(request, response);
});

userRouter.post("/initial-balance", (request: Request, response: Response) => {
	initialBalanceController.handler(request, response);
});

userRouter.get("/", (request: Request, response: Response) => {
	getAllUserController.handler(request, response);
});

userRouter.get("/:id", (request: Request, response: Response) => {
	getUserController.handler(request, response);
});

userRouter.delete("/:id", (request: Request, response: Response) => {
	deleteController.handler(request, response);
});

export default userRouter;
