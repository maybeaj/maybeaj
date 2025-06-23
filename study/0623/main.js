// alert("Hello World");
// console.log("Hello World~");
// document.write("<h1>Document Write</h1>");

// let currentYear = 2025;
// let birthYear = prompt("태어난 해를 입력하세요");
// let age = currentYear - birthYear + 1;
// alert("당신의 나이는 " + age + "살 입니다.");

// let name = "철수";
// let age = 20;
// let isStudent = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;

// console.log("할인된 가격은 " + finalPrice + "원 입니다.");

// let name = "영희";
// console.log(`안녕하세요, ${name}님`);

// let a = 10;
// console.log(a);
// a += 5;
// console.log(a);
// a -= 3;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 4;
// console.log(a);
// console.log(`최종 값은 ${a}입니다.`);

// // 1. 이름과 나이를 입력 받아 인사말 출력하기

// let name = prompt("이름을 입력하세요");
// let age = prompt("나이를 입력하세요");
// alert(`안녕하세요 ${name}님, ${age}이 시군요`);

// // 2. 두 수를 입력받아 사칙연산 결과를 각각 출력하기
// let first = Number(prompt("첫번째 수"));
// let second = Number(prompt("두번째 수"));

// console.log("덧셈:", first + second);
// console.log("뺄셈:", first - second);
// console.log("곱셈:", first * second);
// console.log("나눗셈:", first / second);


// // 3. == vs === 비교 실험하기
// let a = 3;
// let b = "3";

// console.log(a == b);
// console.log(a === b);

// 실슴 : 3의 배수 검사기
// let num = prompt("숫자를 입력하세요.");
// if ( num % 3 === 0 ) {
//     alert("3의 배수입니다.");
// } else {
//     alert("3의 배수가 아닙니다.");
// }

// switch 문
// let day = prompt("요일을 입력하세요");
// switch (day) {
//     case "월요일":
//         alert("한 주의 시작!");
//         break;
//     case "금요일":
//         alert("불타는 금요일!");
//         break;
//     default:
//         alert("평범한 하루네요");
// }

// 1. 숫자 두 개를 변수로 저장하고 더한 결과를 출력해보세요.
let a = 5;
let b = 3;
let answer = a + b;
console.log(answer);

// 2. 이름과 나이를 저장하고 다음과 같은 문장을 출력해보세요. "홍길동님은 20살입니다."
let name="홍길동";
let age = 20;
console.log(`${name}님은 ${age}살입니다.`);

// 3. 정사각형의 한 변 길이를 변수로 저장하고 넓이를 출력해보세요.
let side = 4;
let ans = side * side;
console.log("넓이:"+ ans);

// 4. 숫자 하나가 짝수인지 홀수인지 출력해보세요
let number = 7;
if (number % 2 == 1) {
    console.log("홀수입니다.");
} else console.log("짝수입니다.");

// 5. 나이에 따라 아래 문장을 출력해보세요
// 19세 미만: "미성년자입니다."
// 19세 이상: "성인입니다."

let agee = 16;
if (agee >= 19){
    console.log("성인입니다.");
} else console.log("미성년자입니다.");

// 6. 비밀번호가 맞는지 확인하는 코드 작성해보세요
let password = "1234";
let input = "1234"; // 이 값이 같으면 "로그인 성공", 아니면 "로그인 실패"

if (password === input) {
    console.log("로그인 성공");
} else console.log("로그인 실패");
