function solution(emergency) {
    let emerArray = [...emergency].sort((a,b) => b - a);
    return emergency.map((num) => emerArray.indexOf(num) + 1);
}