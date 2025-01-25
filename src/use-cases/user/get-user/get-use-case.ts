import { ListUserDTO, UserMapper } from "../../../model/user";
import UserRepository from "../../../repositories/database/user-repository";
import { UseCase } from "../../protocols";

export class GetUserUseCase implements UseCase {
	constructor(private repository: UserRepository) {}

	async execute(data: any): Promise<ListUserDTO> {
		try {
			const { id } = data;

			const user = await this.repository.findById(Number(id));

			if (!user) throw Error("user not found");

			return UserMapper.toDTO(user);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
