import TransactiomMapper from "../../../model/transaction";
import { UserMapper } from "../../../model/user";
import { TransactionRepository } from "../../../repositories/database/transaction-repository";
import TransactionCommons from "../../../utils/transaction-commons";
import UserCommons from "../../../utils/user-commons";
import { UseCase } from "../../protocols";

export class GetAllTransactionUseCase implements UseCase {
	constructor(private repository: TransactionRepository) {}

	async execute(data: any) {
		try {
			const id = Number(data?.id);
			const transactions = await this.repository.getAllByUser(id);

			if (transactions.length > 0) {
				return {
					user: UserMapper.toDTO(transactions[0].user),
					transactions: transactions.map((t) => TransactiomMapper.toDTO(t)),
				};
			}
			return transactions;
		} catch (error) {
			console.log(error);
		}
	}
}
