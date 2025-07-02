function solution(numbers) {
    var answer = 0;
    let mul = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let mul = numbers[i] * numbers[j];
            if (mul > answer) {
                answer = mul;
            }
        }
    }
    return answer;
}