import { PrismaClient } from "@prisma/client";
import { CreateTransactionDTO, Transaction } from "../../model/transaction";
import { TransactionRepository } from "../database/transaction-repository";

export class PrismaTransaction implements TransactionRepository {
	constructor(private client: PrismaClient) {}

	async create(rawData: Omit<Transaction, "id">): Promise<Transaction> {
		try {
			return await this.client.transaction.create({
				data: {
					type: rawData.type,
					amount: rawData.amount,
					created_at: rawData.created_at,
					user_id: rawData.user_id,
				},
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	// deleteById(id: number): Promise<Transaction> {

	// }

	async getAllByUser(userID: number): Promise<Array<Transaction> | undefined> {
		try {
			return await this.client.transaction.findMany({
				where: {
					user_id: userID,
				},
				include: {
					user: true,
				},
			});
		} catch (error) {
			console.log(error);
		}
	}
}
