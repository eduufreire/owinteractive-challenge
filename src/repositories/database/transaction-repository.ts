import { CreateTransactionDTO, Transaction, TransactionUser } from "../../model/transaction";

export interface TransactionRepository {
	create(rawData: Omit<Transaction, "id">): Promise<Transaction>;
	getAllByUser(userID: number): Promise<Array<TransactionUser>>;
	deleteById(id: number): Promise<Transaction>;
}
