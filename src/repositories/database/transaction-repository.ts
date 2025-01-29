import { CreateTransactionDTO, Transaction, TransactionUser } from "../../model/transaction";

export interface TransactionRepository {
	create(rawData: Omit<Transaction, "id" | "status">): Promise<Transaction>;
	getAllByUser(userID: number): Promise<Array<TransactionUser>>;
	deleteById(id: number): Promise<Transaction>;
	getBalance(userId: number): Promise<any>;
}
