import { Request, Response, Router } from "express";
import { createController } from "../use-cases/user/create";
import UserMiddleware from "../middlewares/user-middleware";

const middleware = new UserMiddleware();
const userRouter = Router();

userRouter.post("/", middleware.validCreateUser, (request: Request, response: Response) => {
	createController.handler(request, response);
});

// userRouter.get("/", (request: Request, response: Response) => {
// 	console.log("ordenado");
// });

// userRouter.get("/:id", (request: Request, response: Response) => {
// 	console.log("pelo id");
// });

// userRouter.delete("/:id", (request: Request, response: Response) => {
// 	console.log("pelo id");
// });

export default userRouter;
