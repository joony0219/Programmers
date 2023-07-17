function solution(strings, n) {
    return strings.sort((a, b) => {
        const charA = a[n];
        const charB = b[n];
        if (charA !== charB) {
            return charA < charB ? -1 : 1;
        } else {
            return a < b ? -1 : 1;
        }
    });
}