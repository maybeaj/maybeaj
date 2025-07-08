function solution(strlist) {
    var answer = [];  
    for (let i = 0; i < strlist.length; i++) {
        let count = 0;
        for (let j = 0; j < strlist[i].length; j++) {
            count++;
        }
        answer.push(count);
    }
    return answer;
}