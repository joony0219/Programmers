function solution(numlist, n) {
    let sortNum = numlist.sort((a,b) => b - a);
    return sortNum.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))  
}