import { CreateUserDTO, User } from "../../model/user";

export default interface UserRepository {
	save(rawData: Omit<User, "id">): Promise<User>;
	findAll(order?: "asc" | "desc"): Promise<Array<User>>
	findById(id: number): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>;
	deleteById(id: number): Promise<User | undefined >;
}
