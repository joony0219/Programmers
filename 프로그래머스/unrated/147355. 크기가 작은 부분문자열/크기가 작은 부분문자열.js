function solution(t, p) {
    let answer = 0;
    let len = p.length;
    for (let i = 0; i <= t.length - len; i++) {
        let str = t.slice(i, i+len);
        if (str <= p) answer++;
    }
    return answer
}