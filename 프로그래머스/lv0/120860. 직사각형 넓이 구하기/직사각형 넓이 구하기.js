function solution(dots) {
    const x = [];
    const y = [];
    for (const [first, second] of dots) {
      x.push(first);
      y.push(second);
    }
    return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))   
}