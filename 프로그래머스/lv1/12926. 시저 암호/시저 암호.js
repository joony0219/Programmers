function solution(s, n) {
    let answer = '';
    return s.split("").map((str) => {
        let charCode = str.charCodeAt();
        if (str >= "a" && str <= "z") {
            charCode = (charCode - 97 + n) % 26 + 97; 
        } else if (str >= "A" && str <= "Z") {
            charCode = (charCode - 65 + n) % 26 + 65; 
        }
        return String.fromCharCode(charCode);
    }).join("");
}