function solution(cipher, code) {
    var answer = '';
    let count = 1;
    for (let i of cipher) {
        if (count % code === 0) {
            answer += i;
        }
        count++;
    }
    return answer;
}