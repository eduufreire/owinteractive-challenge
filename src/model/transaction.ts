import { raw } from "@prisma/client/runtime/library";
import { User } from "./user";
import { DateParse } from "../utils/date";

export type TypeTransaction = "debit" | "credit" | "reversal";

export interface Transaction {
	id: number;
	type: string;
	amount: number;
	created_at: Date;
	user_id: number;
}

export interface CreateTransactionDTO {
	user_id: number;
	type: TypeTransaction;
	amount: number;
}

export default class TransactiomMapper {
	private constructor() {}

	static toPersistence(rawData: CreateTransactionDTO): Omit<Transaction, "id"> {
		return {
			amount: rawData.amount,
			type: rawData.type,
			created_at: DateParse.getDateNow(),
			user_id: rawData.user_id,
		};
	}
}
