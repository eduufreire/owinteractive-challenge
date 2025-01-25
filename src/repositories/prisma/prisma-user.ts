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

	async findAll(order?: "asc" | "desc"): Promise<Array<User>> {
		try {
			return await this.client.user.findMany({
				orderBy: {
					created_at: order ?? "desc"
				}
			})
		} catch (error) {
			const e = error as Error;
			throw new Error(e.message);
		}
	}

	async findById(id: number): Promise<User | null> {
		try {
			return await this.client.user.findUnique({
				where: {
					id,
				},
			});
		} catch (error) {
			const e = error as Error;
			throw new Error(e.message);
		}
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

	async deleteById(id: number): Promise<User | undefined> {
		try {
			return await this.client.user.delete({
				where: {
					id
				}
			})
		} catch (error) {
			console.log(error)
		}
	}
}
