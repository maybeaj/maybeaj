function solution(n) {
    let answer = 0;

    while (n > 0) {
        answer += n % 10;     // 맨 끝 자리 숫자 더하기
        n = Math.floor(n / 10); // 맨 끝 자리 제거
    }
    
    return answer;
}
