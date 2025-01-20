import { Request, Response, NextFunction } from "express";
import { Controller, UseCase } from "../../protocols";
import { CreateUserDTO } from "../../../model/user";

export class CreateUserController implements Controller {

	constructor(
		private service: UseCase
	) { }

	async handler(request: Request, response: Response) {
		try {
			const {name, email, birthday} = request.body

			const result = await this.service.execute({name, email, birthday});
            return response.json({
                response: result
            })
		} catch (error) {
			return response.send(error)
			// return response.status(error.status).json({
			// 	message: error.message
			// })
		}
	}
}
