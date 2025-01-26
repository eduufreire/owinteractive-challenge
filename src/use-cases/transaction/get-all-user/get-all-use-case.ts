import { TransactionRepository } from "../../../repositories/database/transaction-repository";
import { UseCase } from "../../protocols";

export class GetAllTransactionUseCase implements UseCase {
	constructor(private repository: TransactionRepository) {}

	async execute(data: any) {
		try {
			const transactions = await this.repository.getAllByUser(Number(data));
            console.log(transactions)
			return transactions;
		} catch (error) {
			console.log(error);
		}
	}
}
