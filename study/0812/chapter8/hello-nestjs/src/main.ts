import { NestFactory } from "@nestjs/core";
import { HelloModule } from "./hello.module";

async function bootstrap() {
	const app = await NestFactory.create(HelloModule);
	await app.listen(3000), () => {
		console.log("서버가 http://localhost:3000 에서 실행 중입니다.");
	};
}
bootstrap();
