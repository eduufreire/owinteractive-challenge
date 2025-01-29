import { DateParse } from "../utils/date";

export interface User {
	id: number;
	name: string;
	email: string;
	birthday: Date;
	initial_balance: number;
	created_at: Date;
	updated_at: Date;
}

export interface CreateUserDTO {
	name: string;
	email: string;
	birthday: string;
}

export interface ListUserDTO {
	id: number;
	name: string;
	email: string;
	birthday: string;
	initialBalance: number;
	updated_at: string;
}

export class UserMapper {
	private constructor() {}

	static toPersistence(user: CreateUserDTO): Omit<User, "id" | "initial_balance"> {
		return {
			name: user.name,
			email: user.email,
			birthday: new Date(user.birthday),
			created_at: DateParse.getDateNow(),
			updated_at: DateParse.getDateNow(),
		};
	}

	static toDTO(data: User): ListUserDTO {
		return {
			id: data.id,
			name: data.name,
			email: data.email,
			birthday: DateParse.formatDate(data.birthday, false),
			initialBalance: data.initial_balance,
			updated_at: DateParse.formatDate(data.updated_at),
		};
	}
}
