function solution(s){
    let answer = true;
    let lowerStr = s.toLowerCase();
    let countP = 0;
    let countY = 0
    for(let i = 0; i < s.length; i++) {
        if(lowerStr[i] === 'p') {
            countP ++
        } else if (lowerStr[i] === 'y') {
            countY ++
        }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return countP === countY ? true : false ;
}