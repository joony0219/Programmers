function solution(order) {
    return String(order).split('').filter((num) => num !== '0' && num % 3 === 0).length;
}