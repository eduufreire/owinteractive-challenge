import { TransactionRepository } from "../../../repositories/database/transaction-repository";
import { UseCase } from "../../protocols";

export class DeleteTransactionUseCase implements UseCase {
	constructor(private repository: TransactionRepository) {}

	async execute(data: any) {
		try {
			const { id } = data;
			const result = await this.repository.deleteById(Number(id));
			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
