function solution(s) {
  const array = s.split(' ');
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'Z') {
      sum -= Number(array[i - 1]);
    } else {
      sum += Number(array[i]);
    }
  }

  return sum;
}