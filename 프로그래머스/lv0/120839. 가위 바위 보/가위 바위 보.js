function solution(rsp) {
    return rsp
        .split('')
        .map((v) => v === '2' ? '0' : v === '0' ? '5' : v === '5' ? '2' : v)
        .join('');
}