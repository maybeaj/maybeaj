function solution(numbers) {
    let answer = Number.NEGATIVE_INFINITY;
    let max = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        for ( let j = i + 1; j < numbers.length; j ++ ) {
            max = numbers[i] * numbers[j];
            if ( max > answer ) answer = max;
        }
    }
    return answer;
}