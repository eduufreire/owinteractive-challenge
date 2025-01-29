import { Request, Response } from "express";
import { GetBalanceUseCase } from "./get-balance-use-case";

export class GetBalanceController {
	constructor(private getBalanceUseCase: GetBalanceUseCase) {}

	async handler(request: Request, response: Response) {
		try {
			const result = await this.getBalanceUseCase.execute(request.body);
			return response.status(201).json(result);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
