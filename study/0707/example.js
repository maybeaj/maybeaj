// 연습문제 1

// 1~5 숫자가 포함된 배열 [1, 2, 2, 3, 4, 5, 5]
const arr = [1, 2, 2, 3, 4, 5, 5];
// 중복을 제거
const set = new Set(arr);

// 모든 숫자에 5를 더한 값 // 순서대로 출력
let i = 0;
for (let num of set) {
	console.log(Number(num) + 5);
	i = i + Number(num) + 5;
}

// "total"이라는 키에 중복을 제거한 숫자들의 합 // Map을 만들
const map = new Map();
map.set("total", i);

// 출력
console.log(map.get("total"));

// 연습문제 2
const numbers = [3, 4, 7, 8, 10, 13];
const evens = numbers.filter((num) => num % 2 === 0);
const squared = evens.map((num) => num * num);
const sum = squared.reduce((acc, cur) => acc + cur);
console.log(sum);

// 연습문제 3
async function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("data OK!");
		}, 1000);
	});
}

async function loadData() {
	const data = await fetchData();
	console.log(data);
}

loadData();
