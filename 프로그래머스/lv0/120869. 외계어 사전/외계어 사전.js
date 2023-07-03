function solution(spell, dic) {
    let answer = 2;
    for(word of dic) {
        if(word.split('').sort().join('') === spell.sort().join('')) {
            answer = 1
            break
        } 
    }
    return answer;
}