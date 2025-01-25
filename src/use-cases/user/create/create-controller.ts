import { Request, Response } from "express";
import { Controller, UseCase } from "../../protocols";

export class CreateUserController implements Controller {
	constructor(private service: UseCase) {}

	async handler(request: Request, response: Response) {
		try {
			const result = await this.service.execute(request.body);
			return response.status(201).json(result);
		} catch (error) {
			return response.send(error);
			// return response.status(error.status).json({
			// 	message: error.message
			// })
		}
	}
}
