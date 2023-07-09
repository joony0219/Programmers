function solution(num) {
    let checkNum = num;
    let count = 0;
    while(checkNum !== 1) {
        if(count === 500) {
            return -1
        }
        if(checkNum % 2 === 0) {
            checkNum /= 2;
            count ++;
        } else {
            checkNum = (checkNum * 3) + 1;
            count ++;
        }
    }
    return count;
}