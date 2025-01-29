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

	async findAll(limit: number, offset: number): Promise<Array<User>> {
		try {
			return await this.client.user.findMany({
				orderBy: {
					created_at: "desc",
				},
				take: Number(limit),
				skip: Number(offset),
			});
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
					id,
				},
			});
		} catch (error) {
			console.log(error);
		}
	}

	async updateInitialBalance(userId: number, initialBalance: number): Promise<User> {
		try {
			return await this.client.user.update({
				data: {
					initial_balance: initialBalance,
				},
				where: {
					id: userId,
				},
			});
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
