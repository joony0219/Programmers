function solution(a, b) {
    let answer = [];
    const commonDivisors = [];

    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
          commonDivisors.push(i);
        }
    }

    const MaxCommonDiv = Math.max(...commonDivisors);
    const checkNum = b / MaxCommonDiv;
    
    for(let i = 2; i <= checkNum; i++) {
        if(checkNum % i === 0) answer.push(i)
    }
    for(let num of answer) {
        if(num % 2 !==0 && num % 5 !== 0) {
            return 2
        } 
    }
    return 1

}