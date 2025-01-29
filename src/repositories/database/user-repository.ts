import { User } from "../../model/user";

export default interface UserRepository {
	save(rawData: Omit<User, "id" | "initial_balance">): Promise<User>;
	findAll(limit: number, offset: number): Promise<Array<User>>
	findById(id: number): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
	deleteById(id: number): Promise<User | undefined >;
	updateInitialBalance(userId: number, initialBalance: number): Promise<User>;
}
