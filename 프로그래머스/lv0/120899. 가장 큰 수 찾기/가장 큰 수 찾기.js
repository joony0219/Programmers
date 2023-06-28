function solution(array) {
    let maxNum = Math.max(...array);
    let maxNumIndex = array.indexOf(maxNum)
    return [maxNum, maxNumIndex];
}