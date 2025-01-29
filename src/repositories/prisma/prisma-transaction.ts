import { PrismaClient } from "@prisma/client";
import { Transaction, TransactionUser } from "../../model/transaction";
import { TransactionRepository } from "../database/transaction-repository";
export class PrismaTransaction implements TransactionRepository {
	constructor(private client: PrismaClient) {}

	async create(rawData: Omit<Transaction, "id" | "status">): Promise<Transaction> {
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

	async deleteById(id: number): Promise<Transaction> {
		try {
			return await this.client.transaction.update({
				data: {
					status: false,
				},
				where: {
					id,
				},
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getAllByUser(userID: number): Promise<Array<TransactionUser>> {
		try {
			return await this.client.transaction.findMany({
				where: {
					user_id: userID,
					status: true,
				},
				orderBy: {
					created_at: "desc",
				},
				include: {
					user: true,
				},
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getBalance(userId: number): Promise<any> {
		try {
			return await this.client.transaction.groupBy({
				by: ["user_id"],
				where: {
					user_id: userId,
				},
				_sum: {
					amount: true,
				},
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
