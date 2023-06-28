function solution(numbers) {
    let sortedNum = numbers.sort((a, b) => a - b);
    if (sortedNum[0] * sortedNum[1] > sortedNum[sortedNum.length - 1] * sortedNum[sortedNum.length - 2]) {
        return sortedNum[0] * sortedNum[1];
    } else {
        return sortedNum[sortedNum.length - 1] * sortedNum[sortedNum.length - 2];
    }
}