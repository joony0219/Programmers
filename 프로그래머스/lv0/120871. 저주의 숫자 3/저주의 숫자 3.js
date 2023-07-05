function solution(n) {
    let changeNumArray = [];
    //조건1. 3의 배수
    //조건2. 3이 들어간 수
    for(let i = 1; i <= 200; i++) {
        if(i % 3 !== 0 && i.toString().indexOf("3") === -1) {
            changeNumArray.push(i)
        } 
    }
    return changeNumArray[n-1];
}