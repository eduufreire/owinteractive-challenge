import { ListUserDTO, UserMapper } from "../../../model/user";
import UserRepository from "../../../repositories/database/user-repository";
import { UseCase } from "../../protocols";

export class GetAllUserUseCase implements UseCase {
	constructor(private repository: UserRepository) {}

	async execute(data: any): Promise<Array<ListUserDTO>> {
		try {
			const orderBy = data?.orderBy;

			const users = await this.repository.findAll(orderBy);

			// TODO: tratar o array vazio para nao lançar erro no mapper
			return users.map(UserMapper.toDTO);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
