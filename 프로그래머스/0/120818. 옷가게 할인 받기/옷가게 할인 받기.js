function solution(price) {
    var answer = 0;
    if (price >= 100000 && price < 300000) {
        answer = Math.trunc(price * 0.95);
    } else if (price >= 300000 && price < 500000) {
        answer = Math.trunc(price * 0.9);
    } else if (price >= 500000) {
        answer = Math.trunc(price * 0.8);
    } else answer = price;
    return answer;
}