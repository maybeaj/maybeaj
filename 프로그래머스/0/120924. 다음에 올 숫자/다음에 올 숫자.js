function solution(common) {
    var answer = 0;
    let sum = 0;
    for (let i = 0; i < common.length - 2; i++) {
        if ((common[i+1] - common[i]) === (common[i+2] - common[i + 1]))
        answer = common[common.length - 1] + (common[i+1] - common[i]);
        else if ((common[i+1] / common[i]) === (common[i+2] / common[i + 1]))
            answer = common[common.length - 1] * (common[i+1] / common[i]);
    }
    return answer;
}