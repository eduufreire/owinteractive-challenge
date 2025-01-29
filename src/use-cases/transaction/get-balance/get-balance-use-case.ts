import { Transaction } from "../../../model/transaction";
import { TransactionRepository } from "../../../repositories/database/transaction-repository";

export class GetBalanceUseCase {
	constructor(private repository: TransactionRepository) {}

	async execute(userId: number) {
		try {
			const result = await this.repository.getBalance(userId);
			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
