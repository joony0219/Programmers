function solution(quiz) {
    let answer = [];
    quiz.forEach((val) => {
        const [x, sign, y, , z] = val.split(" "); 
        let ans = 0;
        if (sign === "+") {
            ans = Number(x) + Number(y);
        } else {
            ans = Number(x) - Number(y);
        }
        ans === Number(z) ? answer.push("O") : answer.push("X");
    });
    return answer;
}