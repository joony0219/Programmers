function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let answer = [...my_string].filter((v) => !vowel.includes(v)).join('');
    return answer;
}