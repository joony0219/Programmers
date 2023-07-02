function solution(array, n) {
    let minDiff = 999;
    let closestNum = [];
    for (let i = 0;i < array.length; i++) {
        let diff = Math.abs(array[i] - n);
        if ((diff < minDiff || (diff === minDiff && array[i] < closestNum))) {
            minDiff = diff;
            closestNum = array[i];
        } 
    }
    return closestNum
}