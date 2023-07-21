function solution(a, b) {
    var answer = 0;
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let Month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i = 0; i < a - 1; i++) {
        answer += Month[i];
    }
    answer += b;
    return day[(answer + 4) % 7];
}

// 윤년 : 2월은 29일까지 1년: 366일
// 1월 31일. 2월 29일. 3월 31일. 4월 30일. 5월 31일. 6월 30일. 
// 7월 31일. 8월 31일. 9월 30일. 10월 31일. 11월 30일. 12월 31일
