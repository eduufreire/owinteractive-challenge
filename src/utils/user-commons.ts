import { z } from "zod";
import { CreateUserDTO } from "../model/user";

export default class UserCommons {
	private constructor() {}

	static validCreateUser(data: any): CreateUserDTO {
		const schema = z.object({
			name: z.string(),
			email: z.string().email(),
			birthday: z.string().date("Should to follow this format: YYYY-MM-DD"),
		});

		const check = schema.safeParse(data);
		if (!check.success) {
			console.log(check.error);
			throw new Error("Teste");
		}

		return check.data;
	}
}
