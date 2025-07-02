// type Run = (miles: number) => boolean;
// let runner: Run = function (miles: number): boolean {
// 	if (miles > 10) {
// 		return true;
// 	}
// 	return false;
// };
// console.log(runner(9));

// 나머지 공부 필요
// type Greet = (name: string) => string;
// const greet2: Greet = (name) => `Hello, ${name}`;
// console.log(greet2("John"));

function log(message: string, user?: string) {
    console.log(`${user ?? "system"}: ${message}`); // ?? 앞에 값이 없을 때 system
}

log("Hello");
log("Hello","John");