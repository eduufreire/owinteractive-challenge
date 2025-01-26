import { CreateTransactionDTO, Transaction } from "../../model/transaction";

export interface TransactionRepository {
	create(rawData: Omit<Transaction, "id">): Promise<Transaction>;
	getAllByUser(userID: number): Promise<Array<Transaction> | undefined>;
	// deleteById(id: number): Promise<Transaction>;
}
