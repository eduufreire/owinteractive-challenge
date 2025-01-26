import TransactiomMapper, { CreateTransactionDTO } from "../../../model/transaction";
import { TransactionRepository } from "../../../repositories/database/transaction-repository";
import { DateParse } from "../../../utils/date";
import TransactionCommons from "../../../utils/transaction-commons";
import { UseCase } from "../../protocols";

export default class CreateTransactionuseCase implements UseCase {
	constructor(
		private repository: TransactionRepository,
		private getUser: UseCase,
	) {}

	async execute(data: any) {
		try {
			const dataTransaction = TransactionCommons.validCreateTransaction(data);

			await this.getUser.execute({ id: dataTransaction.user_id });

			return await this.repository.create(
				TransactiomMapper.toPersistence(dataTransaction),
			);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
