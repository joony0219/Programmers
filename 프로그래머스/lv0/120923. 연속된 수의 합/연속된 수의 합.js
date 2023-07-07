function solution(num, total) {
    var answer = [];
    if(num % 2 !== 0) {
        let centerNum = total / num;
        for(let i = (centerNum - Math.floor(num / 2)); i <= (centerNum + Math.floor(num / 2)); i++) {
            answer.push(i)
        }
    return answer;
    } else {
        let centerNum = Math.floor(total / num);
        for(let i = (centerNum - Math.floor(num / 2) + 1); i <= (centerNum + Math.floor(num / 2)); i++) {
            answer.push(i)
        }
    return answer;
    }
    
}