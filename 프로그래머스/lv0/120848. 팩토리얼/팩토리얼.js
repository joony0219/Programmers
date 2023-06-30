function solution(n) {
    let answer = 1;
    let mulNum = 1;
    
    while(n >= mulNum) {
        answer += 1;
        mulNum *= answer;
    }
    return answer -1;
}