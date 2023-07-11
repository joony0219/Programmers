function solution(arr, divisor) {
    let answer = arr.sort((a,b) => a - b).filter((num) => num % divisor === 0);
    
    return answer.length === 0 ? [-1] : answer;
}