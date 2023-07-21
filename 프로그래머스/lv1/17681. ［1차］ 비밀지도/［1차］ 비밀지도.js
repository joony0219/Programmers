function solution(n, arr1, arr2) {
    let answer = [];
    let binaryNum1 = arr1.map((num) => num.toString(2).padStart(n, '0'));
    let binaryNum2 = arr2.map((num) => num.toString(2).padStart(n, '0'));
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            let num1 = Number(binaryNum1[i][j]);
            let num2 = Number(binaryNum2[i][j]);
            if (num1 + num2 === 1 || num1 + num2 === 2) {
                row += "#";
            } else {
                row += " ";
            }
        }
        answer.push(row);
    }
    
    return answer;
}