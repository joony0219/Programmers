function solution(name, yearning, photo) {
    var answer = [];
    for(let i = 0; i < photo.length; i++) {
        let row = [];
        for(let j = 0; j < photo[i].length; j++) {
            if(name.indexOf(photo[i][j]) !== -1) {
                row.push(yearning[name.indexOf(photo[i][j])])
            }
        }
        answer.push(row.reduce((a,b) => a + b, 0))
    }
    
    return answer;
}