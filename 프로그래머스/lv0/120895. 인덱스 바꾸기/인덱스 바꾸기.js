function solution(my_string, num1, num2) {
    const newArray = [...my_string];
    const setNum = newArray[num1];
    newArray[num1] = newArray[num2];
    newArray[num2] = setNum
    return newArray.join('')
}