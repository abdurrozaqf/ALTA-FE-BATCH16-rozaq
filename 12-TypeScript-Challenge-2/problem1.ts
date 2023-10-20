function pairSum(arr: number[], target: number): number[] {
  // your code here
  const len = arr.length;

  let tempSum: number[] = [];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = arr[i] + arr[j];
      if (sum == target) {
        tempSum.push(arr[i]);
        tempSum.push(arr[j]);
      }
    }
  }
  let result: number[] = [];
  result.push(arr.indexOf(tempSum[0]));
  result.push(arr.indexOf(tempSum[1]));

  return result;
}

console.log(pairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11)); // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12)); // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10)); // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6)); // [0, 1]

export default pairSum;
