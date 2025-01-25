import { CreateUserDTO, ListUserDTO, UserMapper } from "../../../model/user";
import UserRepository from "../../../repositories/database/user-repository";
import UserCommons from "../../../utils/user-commons";
import { UseCase } from "../../protocols";

export class CreateUserUseCase implements UseCase {
	constructor(private repository: UserRepository) {}

	async execute(data: any): Promise<ListUserDTO> {
		try {
			const rawData: CreateUserDTO = UserCommons.validCreateUser(data);

			const user = await this.repository.findByEmail(rawData.email);

			if (user) throw Error("este usuario já existe");

			const result = await this.repository.save(
				UserMapper.toPersistence({
					name: data.name,
					email: data.email,
					birthday: data.birthday,
				}),
			);
			return UserMapper.toDTO(result);
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}
