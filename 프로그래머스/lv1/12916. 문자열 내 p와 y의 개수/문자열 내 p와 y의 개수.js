function solution(s){
    let lowerStr = s.toLowerCase();
    let countP = 0;
    let countY = 0;
    for(let i = 0; i < s.length; i++) {
        if(lowerStr[i] === 'p') {
            countP ++
        } else if (lowerStr[i] === 'y') {
            countY ++
        }
    }
    return countP === countY ? true : false ;
}