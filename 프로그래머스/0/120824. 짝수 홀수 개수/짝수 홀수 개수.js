function solution(num_list) {
    var answer = [];
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < num_list.length; i++) {
        if( num_list[i] % 2 == 0 ) {
            evenSum ++;
        } else oddSum ++;
    }
    answer.push(evenSum, oddSum);
    return answer;
}