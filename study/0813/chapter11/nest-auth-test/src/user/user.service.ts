import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService {
	// ❷ 리포지터리 주입
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>
	) {}

	createUser(user): Promise<User> {
		return this.userRepository.save(user);
	}

	async getUser(email: string) {
		const result = await this.userRepository.findOne({
			where: { email },
		});
		return result;
	}
	// ❺ 유저 정보 업데이트. username과 password만 변경
	async updateUser(email, _user) {
		const user: User | null = await this.getUser(email); // Add | null to the type

		// Check if the user exists before trying to update it
		if (user) {
			console.log(_user);
			user.username = _user.username;
			user.password = _user.password;
			console.log(user);
			this.userRepository.save(user);
		} else {
			// Handle the case where the user is not found, e.g., throw an error
			throw new Error(`User with email ${email} not found.`);
		}
	}

	// ❻ 유저 정보 삭제
	deleteUser(email: any) {
		return this.userRepository.delete({ email });
	}

	async findByEmailOrSave(email, username, providerId): Promise<User> {
		const foundUser = await this.userRepository.findOneBy({ email });
		if (foundUser) {
			return foundUser;
		}

		const newUser = await this.userRepository.save({
			email,
			username,
			providerId,
		});
		return newUser;
	}
}
