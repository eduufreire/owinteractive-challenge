import { Request, Response, NextFunction } from "express";
import { Controller, UseCase } from "../../protocols";

export default class CreateTransactionController implements Controller {
	constructor(private service: UseCase) {}

	async handler(request: Request, response: Response, next?: NextFunction) {
		try {
			const result = await this.service.execute(request.body);
			return response.status(201).json(result);
		} catch (error) {
			console.log(error);
		}
	}
}
