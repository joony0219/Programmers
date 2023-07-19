function solution(s) {
    let answer = [];
    let postStr = [];
    for(let i = 0; i < s.length; i++) {
        if(postStr.indexOf(s[i]) === -1) {
            answer.push(-1);
        } else {
            answer.push(i - postStr.lastIndexOf(s[i]))
        }
        postStr.push(s[i]);
    }
    return answer;
}