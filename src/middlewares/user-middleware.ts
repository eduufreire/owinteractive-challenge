import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export default class UserMiddleware {
	validCreateUser(request: Request, response: Response, next: NextFunction) {
		const schema = z.object({
			name: z.string(),
			email: z.string().email(),
			birthday: z.string().date(),
		});

		const check = schema.safeParse(request.body);
		if (!check.success) {
			response.status(400).json({
				body: check.error,
			});
		}
	}
}
