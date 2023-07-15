function solution(d, budget) {
    let answer = 0;
    let sortD = d.sort((a, b) => a - b);
    for(let i = 0; i < sortD.length; i++){
        if(answer + sortD[i] <= budget) {
            answer += sortD[i];
        } else return i
    }
    return sortD.length;
}