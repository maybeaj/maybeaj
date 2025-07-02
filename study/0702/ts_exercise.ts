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

// 🧪 unknown 타입 실습 과제
// unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.
// 외부 API로부터 unknown 타입의 값을 받아, 객체인지 확인한 뒤 속성 값을 출력하는 예제를 작성하세요.
// 사용자 정의 타입 가드 (isProduct)를 만들어 unknown 값이 특정 인터페이스를 만족하는지 검사해보세요.
// 🧪 never 타입 실습 과제
// 무조건 오류를 던지는 함수 fail(message: string)을 작성해보세요.
// "start" | "stop" | "pause" 타입을 받아 각각에 대해 처리하고, 빠진 값이 있을 때 never 타입으로 감지해보세요.
// never 타입을 반환하는 사용자 정의 타입 가드를 작성해보고, 조건을 잘못 통과한 경우 오류가 발생하도록 만들어보세요.
// 🧪 유니온 타입 실습 과제
// type Status = "loading" | "success" | "error"를 선언하고, 상태에 따라 다른 메시지를 출력하는 reportStatus 함수를 작성하세요.
// 다음과 같은 유니온 객체 타입을 받아서 조건 분기로 분리 출력하세요:
// type Message = 
//   | { type: "text"; content: string }
//   | { type: "image"; url: string };

// function handleMessage(msg: Message) {
//   // 조건 분기 처리하기
// }
// string | number | null 타입을 받아 null이 아닐 때만 길이 또는 값을 출력하는 함수를 작성해 보세요.
// 🧪 인터섹션 타입 실습 과제
// type User = { id: number, name: string }과 type Auth = { token: string }를 인터섹션으로 결합해 로그인된 사용자 타입을 정의하고 객체를 생성해보세요.

// interface SEO와 interface Page를 정의하고, 이를 합친 SEOPage 타입을 정의해 웹페이지 메타정보를 포함한 객체를 만들어 보세요.

// 두 개 이상의 이벤트 핸들러 속성을 가진 UI 컴포넌트 타입을 정의해보고, 타입 검사를 통과하도록 작성해보세요.
// 🧪 리터럴 타입 & 타입 별칭 실습 과제
// type TrafficLight = "red" | "yellow" | "green"을 정의하고, 각각에 대해 다른 메시지를 출력하는 함수를 만들어보세요.

// 사용자 역할을 "admin" | "editor" | "viewer"로 제한하고, 역할별 권한을 출력하는 getPermissions(role: Role) 함수를 구현하세요.

// type Shape = "circle" | "square" | "triangle"과 함께 type Size = "small" | "medium" | "large"를 정의하고, 이를 함께 사용하는 객체 배열을 만들어보세요.

