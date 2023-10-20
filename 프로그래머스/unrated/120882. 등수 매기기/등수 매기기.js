function solution(score) {
    let answer = new Array(score.length).fill(1);
    let averArray = score.map((stu) => (stu[0] + stu[1]) / 2);
    
    for(let i = 0; i < averArray.length; i++){
        for(let j = 0; j < averArray.length; j++){
            if(averArray[i] < averArray[j]) answer[i]++;
        }
    }
    return answer
}