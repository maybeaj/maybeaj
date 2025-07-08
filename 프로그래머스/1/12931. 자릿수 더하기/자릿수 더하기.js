function solution(n)
{
    var answer = 0;
     while (n > 0) {
        answer += n % 10;            // 마지막 자리 더하고
        n = Math.floor(n / 10);      // 마지막 자리 제거
    }

    return answer;
}