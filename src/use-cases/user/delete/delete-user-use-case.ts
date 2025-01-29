import { TransactionRepository } from "../../../repositories/database/transaction-repository";
import UserRepository from "../../../repositories/database/user-repository";
import { UseCase } from "../../protocols";

export class DeleteUserUseCase implements UseCase {
	constructor(
		private repository: UserRepository,
		private repositoryTransaction: TransactionRepository,
	) {}
	
	async execute(data: any) {
		try {
			const { id } = data;

			const user = await this.repository.findById(Number(id));
			if (!user) throw new Error("not found");

			const transactions = await this.repositoryTransaction.getAllByUser(user.id);
			if(transactions.length > 0 || user.initial_balance > 0) {
				throw new Error("tem transações");
			}

			const result = await this.repository.deleteById(Number(id));
			console.log(result);
			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
