function solution(i, j, k) {
    const array = Array(j - i + 1).fill(0).map((num, index) => index + i)
    return array.join('').split('').filter((v) => String(v) === String(k)).length;
}