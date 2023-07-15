function solution(s) {
    let answer = s;
    let numArray = ['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i = 0; i < 10; i++){
        let changeNum = (answer.replaceAll(numArray[i],i))
        answer = changeNum
    }
    return parseInt(answer);
}