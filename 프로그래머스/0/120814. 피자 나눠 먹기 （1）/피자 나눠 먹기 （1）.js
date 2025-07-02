function solution(n) {
    var answer = 0;
    if ( (n / 7) >= 1  && (n % 7 === 0)) {
        answer = Math.floor((n / 7));
    } else if ((n / 7) >= 1) {
        answer = Math.floor((n / 7)) + 1;
    } else answer = 1;
    return answer;
}