function solution(box, n) {
    let answer = box.map((side) => Math.floor(side / n)).reduce((a, b) => a * b, 1);
    return answer;
}