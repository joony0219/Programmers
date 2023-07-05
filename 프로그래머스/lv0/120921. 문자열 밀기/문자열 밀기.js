function solution(A, B) {
    const changeA = [...A];
    let count = 0;

    for(let i = 0; i < A.length; i++) {
        if(changeA.join('') === B) {
            return count
        } else {
            changeA.unshift(changeA.pop())
            count ++
        }
    }
    return -1;
}