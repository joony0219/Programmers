function solution(arr) {
    let answer = 0;
    arr.map((num) => answer += num) ;
    return answer / arr.length;
}