import { raw } from "@prisma/client/runtime/library";
import { User } from "./user";
import { DateParse } from "../utils/date";

export type TypeTransaction = "debit" | "credit" | "reversal";

export interface Transaction {
	id: number;
	type: string;
	amount: number;
	created_at: Date;
	status: boolean;
	user_id: number;
}

export interface TransactionUser extends Transaction {
	user: User;
}

export interface CreateTransactionDTO {
	user_id: number;
	type: TypeTransaction;
	amount: number;
}

export interface ListTransactionDTO {
	id: number;
	type: string;
	amount: number;
	created_at: string;
}

export default class TransactiomMapper {
	private constructor() {}

	static toPersistence(rawData: CreateTransactionDTO): Omit<Transaction, "id" | "status"> {
		return {
			amount: rawData.amount,
			type: rawData.type,
			created_at: DateParse.getDateNow(),
			user_id: rawData.user_id,
		};
	}

	static toDTO(data: Transaction): ListTransactionDTO {
		return {
			id: data.id,
			type: data.type,
			amount: Number(data.amount.toFixed(2)),
			created_at: DateParse.formatDate(data.created_at, true),
		};
	}
}
