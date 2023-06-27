function solution(my_string) {
    let answer = [...my_string].filter((v) => /[0-9]/.test(v)).reduce((a, b) => a + Number(b), 0);
    return answer;
}