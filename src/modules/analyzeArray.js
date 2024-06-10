export default function analyzeArray(arr) {
  if (arr.length === 0) {
    return {
      length: 0,
      min: null,
      max: null,
      average: null,
    };
  }
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  arr.forEach((num) => {
    sum += num;
    if (num < min) min = sum;
    if (num > max) max = num;
  });

  return {
    length: arr.length,
    min,
    max,
    average: sum / arr.length,
  };
}
