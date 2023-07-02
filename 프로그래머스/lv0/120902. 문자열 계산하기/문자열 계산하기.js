function solution(my_string) {
    let nums = my_string.match(/(\d+)|(\+|\-)/g);
    let answer = Number(nums[0]);

    for (let i = 1; i < nums.length; i += 2) {
        if (nums[i] === '+') {
            answer += Number(nums[i + 1]);
        } else if (nums[i] === '-') {
            answer -= Number(nums[i + 1]);
        }
    }
    return answer;
}