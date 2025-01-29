import { Request, Response, NextFunction } from "express";
import { Controller, UseCase } from "../../protocols";

export class DeleteUserController implements Controller {
	constructor(private service: UseCase) {}

	async handler(request: Request, response: Response, next?: NextFunction) {
		try {
			const result = await this.service.execute(request.params);

			return response.status(201).json({
				result,
			});
		} catch (error) {
			console.log(error);
			return response.status(500).json();
		}
	}
}
