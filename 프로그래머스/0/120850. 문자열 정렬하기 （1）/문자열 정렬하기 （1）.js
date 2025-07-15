function solution(my_string) {
    let answer = [];
    const number = ['0','1','2','3','4','5','6','7','8','9']; // 문자열로 비교해야 함!

    for (let i = 0; i < my_string.length; i++) {
        if (number.includes(my_string[i])) {
            answer.push(Number(my_string[i])); // 문자열 숫자를 진짜 숫자로 변환해서 push
        }
    }

    answer.sort((a, b) => a - b); // 오름차순 정렬
    return answer;
}
