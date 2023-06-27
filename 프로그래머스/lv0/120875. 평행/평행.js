function solution(dots) {
    const [dot1, dot2, dot3, dot4] = [...dots]
    if ((dot1[1] - dot2[1]) / (dot1[0] - dot2[0]) === (dot3[1] - dot4[1]) / (dot3[0] - dot4[0])) {
        return 1;
    } else if ((dot1[1] - dot3[1]) / (dot1[0] - dot3[0]) === (dot2[1] - dot4[1]) / (dot2[0] - dot4[0])) {
        return 1;
    } else if ((dot1[1] - dot4[1]) / (dot1[0] - dot4[0]) === (dot2[1] - dot3[1]) / (dot2[0] - dot3[0])) {
        return 1;
    } else return 0;
}