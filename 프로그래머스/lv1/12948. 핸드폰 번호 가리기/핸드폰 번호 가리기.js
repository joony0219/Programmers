function solution(phone_number) {
    let answer = '';
    let leng = phone_number.length;
    for(let i = 0; i < leng; i++) {
        i < leng - 4 ? answer += '*' : answer += phone_number[i];
    }
    return answer;
}