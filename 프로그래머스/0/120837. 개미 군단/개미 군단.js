function solution(hp) {
    let five = Math.floor(hp / 5);
    hp %= 5;  // 5로 나눈 나머지를 hp에 다시 저장

    let three = Math.floor(hp / 3);
    hp %= 3;  // 3으로 나눈 나머지를 hp에 다시 저장

    let one = hp;  // 남은 hp는 전부 1짜리 일개미가 처리

    return five + three + one;
}