import {
	Body,
	Controller,
	Get,
	Post,
	Request,
	Response as Res, // Rename Response to avoid conflict
	UseGuards,
} from "@nestjs/common";
import { AuthenticatedGuard, LocalAuthGuard, LoginGuard } from "./auth.guard";
import { CreateUserDto } from "src/user/user.dto";
import { AuthService } from "./auth.service";
import type { Response } from "express";

@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post("register")
	async register(@Body() userDto: CreateUserDto) {
		return await this.authService.register(userDto);
	}

	@Post("login")
	async login(@Request() req, @Res() res: Response) {
		// Use the renamed Response type
		const userInfo = await this.authService.validateUser(
			req.body.email,
			req.body.password
		);

		console.log("userInfo:", userInfo);

		if (userInfo) {
			res.cookie("login", JSON.stringify(userInfo), {
				httpOnly: false,
				maxAge: 1000 * 60 * 60 * 24 * 7,
			});
		}

		return res.send({ message: "login success" });
	}

	@UseGuards(LoginGuard) //  ❶ LoginGuard 사용
	@Post("login2")
	async login2(@Request() req, @Res() res: Response) {
		// ❷ 쿠키 정보는 없지만 request에 user 정보가 있다면 응답값에 쿠키 정보 추가
		if (!req.cookies["login"] && req.user) {
			// 응답에 쿠키 정보 추가
			res.cookie("login", JSON.stringify(req.user), {
				httpOnly: true,
				// maxAge: 1000 * 60 * 60 * 24 * 7, // 1day
				maxAge: 1000 * 10, // ❸ 로그인 테스트를 고려해 10초로 설정
			});
		}
		return res.send({ message: "login2 success" });
	}

	// ❹ 로그인을 한 때만 실행되는 메서드
	@UseGuards(LoginGuard)
	@Get("test-guard")
	testGuard() {
		return "로그인된 때에만 이 글이 보입니다.";
	}

	@UseGuards(LocalAuthGuard)
	@Post("login3")
	login3(@Request() req) {
		return req.user;
	}

	@UseGuards(AuthenticatedGuard)
	@Get("test-guard2")
	testGuardWithSession(@Request() req) {
		return req.user;
	}
}
