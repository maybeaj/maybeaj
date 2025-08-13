import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { UserService } from "src/user/user.service";

@Injectable()
export class SessionSerializer extends PassportSerializer {
	constructor(private readonly userService: UserService) {
		super();
	}

	// 에러 타입을 Error | null 로
	override serializeUser(
		user: any,
		done: (err: Error | null, id?: any) => void
	): void {
		done(null, user.email);
	}

	override async deserializeUser(
		payload: any,
		done: (err: Error | null, user?: any) => void
	): Promise<void> {
		try {
			const user = await this.userService.getUser(payload);
			if (!user) return done(new Error("No User"));

			const { password, ...userInfo } = user;
			done(null, userInfo);
		} catch (e) {
			done(e as Error);
		}
	}
}
