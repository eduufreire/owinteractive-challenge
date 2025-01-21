import { CreateUserDTO, User } from "../../model/user";

export default interface UserRepository {
	save(rawData: Omit<User, "id">): Promise<User>;
	// findAllOrdered(): Array<User>;
	findById(id: number): User | null;
	findByEmail(email: string): Promise<User | null>;
	// deleteById(id: number): boolean;
}
