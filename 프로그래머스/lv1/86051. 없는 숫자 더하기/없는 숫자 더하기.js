function solution(numbers) {
    let count = 0;
    let result = 0;
    while(count < 10) {
        if(numbers.indexOf(count) === -1) {
            result += count;
            count ++;
        } else count ++;
    }
    return result;
}