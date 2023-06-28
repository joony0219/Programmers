function solution(my_string) {
    return [...my_string]
        .filter((n) => !isNaN(Number(n)))
        .map(n => Number(n))
        .sort((a, b) => a - b);
}