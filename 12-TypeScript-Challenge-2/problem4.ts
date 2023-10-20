function findMaxSumSubArray(k: number, arr: number[]): number {
  // your code here

  let result = 0;
  const tempSum = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const dupiclateForSum = arr.slice(i, i + k);
    const sumArray = dupiclateForSum.reduce((a, b) => a + b, 0);
    tempSum.push(sumArray);

    const maxSumValue = Math.max(...tempSum);
    result = maxSumValue;
  }

  return result;
}

console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5])); // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1])); // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1])); // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1])); // 8

export default findMaxSumSubArray;
