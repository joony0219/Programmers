function solution(x) {
    let hashaNum = String(x).split('').reduce((a, b) => a + Number(b), 0);
    return x % hashaNum === 0 ? true : false;
}