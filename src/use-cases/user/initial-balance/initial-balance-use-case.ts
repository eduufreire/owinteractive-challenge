import UserRepository from "../../../repositories/database/user-repository";

export class InitialBalanceUseCase {
	constructor(private repository: UserRepository) {}

	async execute(userId: number, amount: number) {
		try {
			const result = await this.repository.updateInitialBalance(userId, amount);
			return result;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
