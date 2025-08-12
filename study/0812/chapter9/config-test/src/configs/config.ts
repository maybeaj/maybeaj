
import { existsSync, readFileSync } from "fs";
import * as path from "path";
import * as yaml from "js-yaml";
import common from "./common";
import local from "./local";
import dev from "./dev";
import prod from "./prod";

type Dict = Record<string, any>;

// 런타임 타입 가드: unknown → Record<string, any>
function isRecord(value: unknown): value is Dict {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

const phase = process.env.NODE_ENV ?? "local";

// NODE_ENV에 따른 환경별 설정 선택
let conf: Dict = {};
switch (phase) {
	case "local":
		conf = local as Dict;
		break;
	case "dev":
		conf = dev as Dict;
		break;
	case "prod":
		conf = prod as Dict;
		break;
	default:
		conf = local as Dict; // 알 수 없는 값이면 local로 폴백
		break;
}

// YAML(optional) 읽기: 없으면 빈 객체, 있으면 안전 파싱
const yamlPath = path.resolve(process.cwd(), "envs", "config.yaml");
let yamlConfig: Dict = {};

if (existsSync(yamlPath)) {
	const raw = readFileSync(yamlPath, "utf8");
	const parsed: unknown = yaml.load(raw);
	if (!isRecord(parsed)) {
		throw new Error("Invalid config.yaml: root must be an object");
	}
	yamlConfig = parsed;
	// 필요하면 키 검증 추가:
	// if (!isRecord(yamlConfig.http) || typeof yamlConfig.http.port !== "number") {
	//   throw new Error("Invalid config.yaml: http.port must be a number");
	// }
}

// 최종 머지: 공통 → NODE_ENV별 → YAML(최종 오버라이드)
export default () => ({
	...(common as Dict),
	...conf,
	...yamlConfig,
});
