function solution(my_string) {
    let numArray = [];
    let answer = 0;
    numArray.push(...my_string.split(/[a-zA-Z]+/));
    return numArray.reduce((a,b) => a + Number(b), 0);
}