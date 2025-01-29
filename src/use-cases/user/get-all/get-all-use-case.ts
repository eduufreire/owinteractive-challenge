import { ListUserDTO, UserMapper } from "../../../model/user";
import UserRepository from "../../../repositories/database/user-repository";
import { UseCase } from "../../protocols";

export class GetAllUserUseCase implements UseCase {
	constructor(private repository: UserRepository) {}

	async execute(data: any): Promise<Array<ListUserDTO>> {
		try {
			let { limit, offset } = data.query;

			if (!limit) limit = 5;
			if (!offset) offset = 0;

			const users = await this.repository.findAll(limit, offset);

			// TODO: tratar o array vazio para nao lançar erro no mapper
			return users.map(UserMapper.toDTO);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
