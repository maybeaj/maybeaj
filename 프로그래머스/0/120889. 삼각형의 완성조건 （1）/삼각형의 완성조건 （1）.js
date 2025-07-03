function solution(sides) {
    let max = sides[0];
    let sum = 0;

    for (let i = 0; i < 3; i++) {
        if (sides[i] > max) {
            max = sides[i];     // 가장 큰 변 저장
        }
        sum += sides[i];        // 전체 합 구하기
    }

    sum -= max; // 나머지 두 변의 합

    return max < sum ? 1 : 2;
}
