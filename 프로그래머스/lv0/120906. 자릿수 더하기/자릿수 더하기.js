    function solution(n) {
        let answer = String(n).split('').reduce((a, b) => a + Number(b), 0);
        return answer;
    }