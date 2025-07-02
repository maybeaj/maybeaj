// 1.타입에 맞는 값만 허용
function printAge(age: number) {
    if (typeof age !== "number") {
        throw new Error("숫자만 허용됩니다.");
    }
    console.log(`${age}살`);
}

printAge(20);

// 2.커스텀 타입 검사 함수 만들기
type UserInput = string | number;
function isString(input: UserInput): input is string {
    return typeof input === "string";
}

// 3.반환 타입 유효성 검사
function getStatus(code: number): "success" | "error" {
    if (code === 200) return "success";
    return "error";
}

// 매개변수가 string일 때만 길이 출력하는 함수
function showLength(input: string | number) {
    if (typeof input === "string") {
        console.log(`길이: ${input.length}`);
    } else {
        console.log("문자열이 아닙니다.");
    }
}

// 문제1. 문자열 변수 선언
let name1: string = "Alice";

// 문제2. 숫자와 boolean 타입
let age1: number = 21;
let isStudent: boolean = true;

// 문제3. 함수 매개변수와 반환 타입
function add(a: number, b:number): number {
    return a + b;
}

// 문제4. 배열 타입
let scores: number[] = new Array(80, 90, 100);

// 문제5. 객체 타입 정의
let person: {
    name: string,
    age: number
} = {
    name: "Alice",
    age: 21
}

// 문제6. 유니언 타입
let id: number | string = "user123";