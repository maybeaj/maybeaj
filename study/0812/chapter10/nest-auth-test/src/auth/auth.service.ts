import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/user/user.dto";
import { UserService } from "src/user/user.service";
import * as bcrypt from "bcrypt";

@Injectable() // ❶ 프로바이더로 사용
export class AuthService {
	constructor(private userService: UserService) {} // ❷ 생성자에서 UserService를 주입받음

	async register(userDto: CreateUserDto) {
		// ❸ 메서드 내부에 await 구문이 있으므로 async 필요
		// ❹ 이미 가입된 유저가 있는지 체크
		const user = await this.userService.getUser(userDto.email);
		if (user) {
			// ❺ 이미 가입된 유저가 있다면 에러 발생
			throw new HttpException(
				"해당 유저가 이미 있습니다.",
				HttpStatus.BAD_REQUEST
			);
		}

		// ❻ 패드워드 암호화
		const encryptedPassword = bcrypt.hashSync(userDto.password, 10);

		// 데이터베이스에 저장. 저장 중 에러가 나면 서버 에러 발생
		try {
			const user = await this.userService.createUser({
				...userDto,
				password: encryptedPassword,
			});

			// 👇 Destructure to exclude password
			const { password, ...result } = user;

			return result; // Return the new object without the password
		} catch (error) {
			throw new HttpException("서버 에러", 500);
		}
	}

	async validateUser(email: string, password: string) {
		const user = await this.userService.getUser(email); // ❶ 이메일로 유저 정보를 받아옴

		if (!user) {
			// ❷ 유저가 없으면 검증 실패
			return null;
		}
		const { password: hashedPassword, ...userInfo } = user; // ❸ 패스워드를 따로 뽑아냄
		if (bcrypt.compareSync(password, hashedPassword)) {
			// ❹ 패스워드가 일치하면 성공
			return userInfo;
		}
		return null;
	}

    
}
