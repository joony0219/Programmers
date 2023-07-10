function solution(x, n) {
    let answer = [];
    let addNum = x
    while(answer.length < n) {
        answer.push(addNum);
        addNum += x;
    }
    return answer;
}