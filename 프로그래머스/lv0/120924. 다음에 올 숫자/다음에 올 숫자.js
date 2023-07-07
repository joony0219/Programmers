function solution(common) {
    var answer = 0;
    let leng = common.length;
    if(common[1] - common[0] === common[2] - common[1]) {
        answer += (common[leng - 1] + common[1] - common[0])
    } else {
        answer += (common[leng - 1] * (common[1] / common[0]))
    }
    
    return answer;
}