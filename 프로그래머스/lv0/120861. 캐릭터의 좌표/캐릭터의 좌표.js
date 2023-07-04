function solution(keyinput, board) {
    let answer = [0, 0];
    const maxWidth = (board[0] - 1) / 2;
    const maxHeight = (board[1] - 1) / 2;
    
    for(move of keyinput) {
        if (move === 'left' && -(maxWidth) < answer[0]) {
            answer[0] -= 1
        } else if (move === 'right' && maxWidth > answer[0]) {
            answer[0] += 1
        } else if (move === 'up' && maxHeight > answer[1]) {
            answer[1] += 1
        } else if (move === 'down' && -(maxHeight) < answer[1]) {
            answer[1] -= 1
        }
    }
    
    return answer;
}