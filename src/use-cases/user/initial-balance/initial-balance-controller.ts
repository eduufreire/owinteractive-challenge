import { Request, Response } from "express";
import { InitialBalanceUseCase } from "./initial-balance-use-case";

export class InitialBalanceController {
	constructor(private initialBalanceUseCase: InitialBalanceUseCase) {}

	async handler(request: Request, response: Response) {
		try {
			const {userId, amount} = request.body
			const result = await this.initialBalanceUseCase.execute(userId, amount);
			return response.status(201).json(result);
		} catch (error) {
			console.log(error);
		}
	}
}
