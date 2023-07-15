function solution(t, p) {
    let arrayT = [];
    let leng = p.length;
    for(let i = 0; i < t.length - leng + 1; i++) {
        arrayT.push(t.slice(i, i + leng))
    }
    return arrayT.map((num) => num <= p).filter((bol) => bol === true).length ;
}