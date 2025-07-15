function solution(my_string) {
    var answer = 0;
    const num = ['1','2','3','4','5','6','7','8','9'];
    for (let i = 0; i < my_string.length; i++) {
        if (num.includes(my_string[i])){
            answer += Number(my_string[i]);
        }
    }
    return answer;
}