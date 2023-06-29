function solution(num, k) {
    answer = String(num).indexOf(k) 
    return answer === -1 ? -1 :  answer + 1
}