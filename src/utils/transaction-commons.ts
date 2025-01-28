import { z } from "zod";
import { CreateTransactionDTO } from "../model/transaction";

export default class TransactionCommons {
	private constructor() {}

	static validCreateTransaction(data: any): CreateTransactionDTO {
		const schema = z.object({
			user_id: z.number(),
			type: z.enum(["debit", "credit", "reversal"]),
			amount: z.number(),
		});

		const result = schema.safeParse(data);

		if (!result.success) {
			console.log(result.error);
			throw new Error("Error in valid transaction");
		}

		return result.data;
	}

	static validParamId(data: any): number {
		const schema = z.object({
			id: z.number(),
		});
		const result = schema.safeParse(data);
		if (!result.success) {
			console.log(result.error);
			throw new Error("aa");
		}
		return data.id;
	}
}
