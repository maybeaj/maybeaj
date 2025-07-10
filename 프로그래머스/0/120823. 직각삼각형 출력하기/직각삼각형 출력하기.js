const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
     const n = Number(input[0]);  // 입력값 가져오기

    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));  // 각 줄마다 i개의 * 출력
    }
});