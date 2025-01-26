import { Request, Response, NextFunction } from "express";
import { Controller, UseCase } from "../../protocols";

export class GetAllTransactionController implements Controller {
	constructor(private service: UseCase) {}

	async handler(request: Request, response: Response, next?: NextFunction) {
		try {
			const result = await this.service.execute(request.params.id);
			return response.status(200).json(result);
		} catch (error) {
			console.log(error);
		}
	}
}
