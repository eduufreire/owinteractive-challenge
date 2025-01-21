import { PrismaClient } from "@prisma/client";
import { User } from "../../model/user";
import UserRepository from "../database/user-repository";

export class PrismaUser implements UserRepository {
	constructor(private client: PrismaClient) {}

	async save(rawData: Omit<User, "id">): Promise<User> {
		try {
			return await this.client.user.create({
				data: {
					name: rawData.name,
					email: rawData.email,
					birthday: rawData.birthday,
					created_at: rawData.created_at,
					updated_at: rawData.updated_at,
				},
			});
		} catch (error) {
			const e = error as Error;
			throw new Error(e.message);
		}
	}

	findAllOrdered(): Array<string> {
		return [""];
	}

	findById(id: number): User {
		return {
			id: 1,
			name: "",
			email: "",
			birthday: new Date(),
			created_at: new Date(),
			updated_at: new Date(),
		};
	}

	async findByEmail(email: string): Promise<User | null> {
		try {
			return await this.client.user.findUnique({
				where: {
					email,
				},
			});
		} catch (error) {
			const e = error as Error;
			throw new Error(e.message);
		}
	}

	deleteById(id: number): void {}
}
