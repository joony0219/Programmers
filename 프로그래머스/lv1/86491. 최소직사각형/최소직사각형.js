function solution(sizes) {
    let biggerSize = sizes.map((size) => size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]])
    let bigW = Math.max(...biggerSize.map((size) => size[0]))
    let bigH = Math.max(...biggerSize.map((size) => size[1]))
    return bigW * bigH;
}