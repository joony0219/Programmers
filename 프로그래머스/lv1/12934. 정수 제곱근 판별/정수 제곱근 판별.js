function solution(n) {
    let squareNum = Math.sqrt(n)
    return squareNum === Math.floor(squareNum) ? Math.pow(squareNum + 1, 2) : -1 ;
}