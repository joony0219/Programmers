function solution(food) {
    let foodArray = []
    for(let i = 1; i < food.length; i++) {
        foodArray.push(i.toString().repeat(Math.floor(food[i] / 2)))
    }
    let startNum = foodArray.join('');
    let endNum = foodArray.reverse('').join('');
    return startNum + 0 + endNum;
}