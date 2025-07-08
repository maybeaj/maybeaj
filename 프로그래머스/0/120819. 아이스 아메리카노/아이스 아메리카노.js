function solution(money) {
    const coffee = Math.floor(money / 5500); // 정수로 딱 떨어지는 잔 수
    const change = money % 5500;             // 나머지 잔돈
    return [coffee, change];
}