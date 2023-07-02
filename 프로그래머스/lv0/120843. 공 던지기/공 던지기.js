function solution(numbers, k) {
    let length = numbers.length;
    let order = k * 2 - 2;
    return length > order ? numbers[order] : numbers[order % length];
}